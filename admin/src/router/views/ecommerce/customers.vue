<script>
import {db,fileupload} from "../../../firebase"
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Swal from "sweetalert2";
import { customersData } from "./data-customers";
import appConfig from "@/app.config";
// import vue2Dropzone from "vue2-dropzone";
/**
 * Customers component
 */
export default {
  page: {
    title: "Models",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  
  data() {
    return {
      picture:'',
      customersData: customersData,
      modellist:[],
      isuploading:false,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      selected: [],
      pageOptions: [10, 25, 50, 100],
      filter: null,
      sortDesc:true,
      filterOn: [],
      modelitem:{pictures:[]},
      userdisplay:'',
      useradddisplay:'none',
      fields: [
                {
                    key: "#",
                    sortable: true,
                },
                {
                    key: "Name",
                    sortable: true,
                },
                {
                    key: "Location",
                    sortable: true,
                },
                 {
                    key: "Height",
                    sortable: true,
                },
                {
                    key: "Age",
                    sortable: true,
                },
                {
                    key: "Eye",
                    sortable: true,
                },
                {
                    key: "Hair",
                    sortable: true,
                },
                {
                    key: "Shirt",
                    sortable: true,
                },
                {
                    key: "Shoes",
                    sortable: true,
                },
                {
                    key: "Type",
                    sortable: true,
                },
                {
                    key: "Action",
                    sortable: false,
                }
            ],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 120,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
      },
      componentKey:0,
      emailerror:false,
      title: "Models",
      initialitem:{pictureurl:[{urlname:''}]},
      uploadValue: 0,
        img1: null,
        imageData: null,
      imagearray:[],
      items: [
        {
          text: "Face",
          href: "/"
        },
        {
          text: "Models",
          active: true
        }
      ]
    };
  },
  computed: {
        /**
         * Total no. of records
         */
      rows() {
          return this.modellist.length;
      },
  },
  created() {
    this.fetchModels();
  },
  methods :{
      click1() {
        this.$refs.input1.click()   
      },

      previewImage(event) {
        this.imagearray = [];
        this.uploadValue=0;
        this.img1=null;
        this.imageData = event.target.files[0];
        this.isuploading = true;
        for(var i=0;i<event.target.files.length;i++){
          this.imageData = event.target.files[i];
          this.onUpload()
        }


        this.isuploading = false;
        this.componentKey++;
      },

      async onUpload(){
        this.img1=null;
       
        const storageRef=fileupload.ref(`Amran/${this.imageData.name}`).put(this.imageData);
        await storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          }, error=>{console.log(error.message)},
        ()=>{this.uploadValue=100;
            storageRef.snapshot.ref.getDownloadURL().then((url)=>{           
                 this.img1 = url
                 this.modelitem.pictures.push(this.img1)
              });
            }      
          );
      },
    fetchModels () {
      this.modellist = [];
        db.collection('models').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let key = doc.id
            let model = doc.data()
            model.id = key;
            if(model.pictures.length > 0) {
              model.pictureurl = [];
              for(var i=0;i<model.pictures.length;i++) {
                model.pictureurl[i] = {urlname:''}
                 model.pictureurl[i]['urlname'] = model.pictures[i]
              }
            }
            this.modellist.push(model)        
          })
        })
        .catch(error => {
          console.log("Error reading document:", error);
        })
        this.componentKey++;
    },
    onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
   
      async onSubmit(){
      if(this.modelitem.name == undefined ||  this.modelitem.location == '' || this.modelitem.type == undefined ||  this.modelitem.height == undefined){
     
        return;
      }
      
      if(this.modelitem.id){
        var key = this.modelitem.id;
        if(this.modelitem.pictureurl.length > 0) {
          this.modelitem.pictures = [];
          for(var i = 0;i<this.modelitem.pictureurl.length;i++) {
            this.modelitem.pictures[i] = this.modelitem.pictureurl[i]['urlname'];
          }
        }
        delete this.modelitem['id'];       
        delete this.modelitem['pictureurl']
        
        db.collection('models').doc(key).update(this.modelitem).then(() => {
             console.log("User successfully updated!");
        }).catch((error) => { console.log(error);});
      }else{
        if(this.modelitem.pictureurl.length > 0) {
          this.modelitem.pictures = [];
          for(var j = 0;j<this.modelitem.pictureurl.length;j++) {
            this.modelitem.pictures[j] = this.modelitem.pictureurl[j]['urlname'];
          }
        }
        db.collection('models').add(this.modelitem).then(() => {
             console.log("User successfully added!");
        }).catch((error) => { console.log(error);});
      }      
      this.fetchModels();
      },
       addMember() {
      this.modelitem.pictureurl.push({ urlname: '' })
    },
    deleteMember(index) {
      this.modelitem.pictureurl.splice(index, 1)
    },
    CustomerDel(key) {        
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger ml-2"
          },
          buttonsStyling: false
        });

        swalWithBootstrapButtons
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            showCancelButton: true
          })
          .then(result => {
            if (result.value) {
                db.collection("models").doc(key).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })              
              swalWithBootstrapButtons.fire(
                "Deleted!",
                "The model has been deleted.",
                "success"
              );
              this.fetchModels()
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                "Cancelled",
                "Your imaginary file is safe :)",
                "error"
              );
            }
          });
      },
  }
  
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row" v-bind:style="{display:userdisplay}">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row mb-2">
                      <div class="col-sm-4">
                        <div class="search-box mr-2 mb-2 d-inline-block">
                          <div class="position-relative">
                            <input type="text" v-model="filter" class="form-control" placeholder="Search..." />
                            <i class="bx bx-search-alt search-icon"></i>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-8">
                        <div class="text-sm-right">
                          <a type="button"  v-on:click="modelitem=initialitem,userdisplay = 'none',useradddisplay=''" class="btn btn-success btn-rounded mb-2 mr-2" >
                            <i class="mdi mdi-plus mr-1"></i> ADD NEW MODEL
                          </a>
                        </div>
                      </div>
                    </div>
                   
                    <div class="table-responsive mb-0" :key="componentKey">
                      <b-table :items="modellist" :fields="fields" tbody-tr-class="detailsClassFn" responsive="sm" :per-page="perPage" :current-page="currentPage"  :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                      
                          <template #cell(#)="data">
                            
                            {{data.index+1}}
                       
                            
                          </template>
                          <template #cell(Name)="data">
                            {{data.item.name}}
                            
                          </template>
                          <template #cell(Location)="data">
                            {{data.item.location}}
                          </template>
                          <template #cell(Height)="data">
                            {{data.item.height}}
                          </template>

                          <template #cell(Age)="data">
                            {{data.item.age}}
                            
                          </template>
                          <template #cell(Eye)="data">
                            {{data.item.eyes}}
                          </template>
                          <template #cell(Hair)="data">
                            {{data.item.hair}}
                          </template>
                          <template #cell(Shirt)="data">
                            {{data.item.shirt}}
                          </template>
                          <template #cell(Shoes)="data">
                            {{data.item.shoes}}
                          </template>
                          <template #cell(Type)="data">
                            {{data.item.type}}
                          </template>
                          <template #cell(Action)="data">
                            <i class="ml-3 bx bx-edit-alt  font-size-18"   v-on:click="modelitem=data.item,userdisplay = 'none',useradddisplay=''" style="cursor: pointer;"></i>
                            <i class="ml-3 bx bx-trash-alt font-size-18"   @click="CustomerDel(data.item.id)" style="cursor: pointer;"></i>
                          </template>
                       </b-table>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="dataTables_paginate paging_simple_numbers float-right ">
                                <ul class="pagination pagination-rounded mb-0">
                                    <!-- pagination -->
                                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-bind:style="{display:useradddisplay}">
      <div class="card">
          <div class="card-body">
              <div class="row mb-4">
                <div class="col-lg-12">
                  <h5 class="font-weight-bold">MODEL INFORMATION</h5>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                    <div class="form-group row mb-4">
                        <label for="taskname" class="col-form-label col-lg-2">Name</label>
                        <div class="col-lg-10">
                          <input
                            type="text"
                            class="form-control"
                            v-model="modelitem.name"
                          />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group row mb-4">
                      <label for="taskname" class="col-form-label col-lg-2">Location</label>
                      <div class="col-lg-10">
                        <input
                          type="text"
                          class="form-control"
                          v-model="modelitem.location"
                        />
                      </div>
                  </div>                  
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                    <div class="form-group row mb-4">
                        <label for="taskname" class="col-form-label col-lg-2">Height</label>
                        <div class="col-lg-10">
                          <input
                            type="email"
                            class="form-control"
                            v-model="modelitem.height"
                          />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group row mb-4">
                      <label for="taskname" class="col-form-label col-lg-2">Age</label>
                      <div class="col-lg-10">
                        <input
                          type="text"
                          class="form-control"
                          v-model="modelitem.age"
                        />
                      </div>
                  </div>                  
                </div>
              </div> 
              <div class="row">
                <div class="col-lg-6">
                    <div class="form-group row mb-4">
                        <label for="taskname" class="col-form-label col-lg-2">Eye</label>
                        <div class="col-lg-10">
                        <b-form-select v-model="modelitem.eyes" :options="['Blue/Grey', 'Brown', 'Dark Brown','Black','Green','Green/Grey','Green/Hazel','Hazel','Blue']"></b-form-select>
                        
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group row mb-4">
                      <label for="taskname" class="col-form-label col-lg-2">Hair</label>
                      <div class="col-lg-10">
                      <b-form-select v-model="modelitem.hair" :options="['Auburn', 'Black', 'Blonde','Brown | Black','Brown with Blonde Streaks','Dark Blonde','Dark Brown','Grey','Light Brown','Red','Red/Orange/Brown','Strawberry Blonde']"></b-form-select>
                        
                      </div>
                  </div>                  
                </div>
              </div>   
              <div class="row">
                <div class="col-lg-6">
                    <div class="form-group row mb-4">
                        <label for="taskname" class="col-form-label col-lg-2">Shirt</label>
                        <div class="col-lg-10">
                        <b-form-select v-model="modelitem.shirt" :options="['S', 'M', 'L','XL','XXL']"></b-form-select>
    
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group row mb-4">
                      <label for="taskname" class="col-form-label col-lg-2">Shoes</label>
                      <div class="col-lg-10">
                        <input
                          type="text"
                          class="form-control"
                          v-model="modelitem.shoes"
                        />
                      </div>
                  </div>                  
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                    <div class="form-group row mb-4">
                        <label for="taskname" class="col-form-label col-lg-2">Type</label>
                        <div class="col-lg-10">
                        <b-form-select v-model="modelitem.type" :options="['MEN', 'WOMEN', 'BOYS','GIRLS','TEEN BOYS','TEEN GIRLS']"></b-form-select>
                        </div>
                    </div>
                </div>
              </div>   
           
              

              <div class="inner-repeater mb-4">
                    <div class="inner form-group mb-0 row">
                      <label class="col-form-label col-lg-2">Model Image</label>
                      <div
                        v-for="( picture, index) in modelitem.pictureurl"
                        :key="picture.urlname"
                        class="inner col-lg-10 ml-md-auto"
                      >
                        <div class="mb-3 row align-items-center">
                          <div class="col-md-6">
                            <input
                              v-model="picture.urlname"
                              type="text"
                              class="inner form-control"
                              placeholder="Enter Image Name..."
                            />
                          </div>
                          <div class="col-md-2">
                            <input
                              type="button"
                              class="btn btn-primary btn-block inner"
                              value="Delete"
                              @click="deleteMember(index)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-end">
                      <div class="col-lg-10">
                        <input
                          type="button"
                          class="btn btn-success inner"
                          value="Add Model Image"
                          @click="addMember"
                        />
                      </div>
                    </div>
                  </div>

             
               
           
            <div class="row">
              <div class="col-lg-6"></div>
              <div class="col-lg-6">
                  <div class="row mb-4">
                   <div class="col-lg-2"></div>
                    <div class="col-lg-10 d-flex">
                      <b-button class="btn btn-danger mr-2 w-100" v-on:click="userdisplay = '',useradddisplay='none'" >Cancel</b-button>
                     <b-button class="btn btn-info mr-2 w-100" v-on:click="onSubmit(),userdisplay = '',useradddisplay='none'" >Save</b-button>
                    </div>
                  </div>
              </div>             
            </div>     
          </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
