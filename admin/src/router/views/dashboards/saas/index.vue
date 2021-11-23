<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";
// import Sellingchart from "./sellingchart";
import {db} from "../../../../firebase"
// import simplebar from "simplebar-vue";
import { required } from "vuelidate/lib/validators";

import { earningLineChart, salesAnalyticsDonutChart, ChatData } from "./data";

/**
 * Saas Dashboard Component
 */
export default {
  page: {
    title: "",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    // simplebar,
    Layout,
    PageHeader,
    // Sellingchart,
  },
  data() {
    return {
      earningLineChart: earningLineChart,
      salesAnalyticsDonutChart: salesAnalyticsDonutChart,
      ChatData: ChatData,
      title: "Dashboards",
      items: [
        {
          text: "Face",
          href: "/",
        },
        {
          text: "Dashboard",
          active: true,
        },
      ],
      menlen:0,
      womenlen:0,
      boyslen:0,
      girlslen:0,
      teenboylen:0,
      teengirlen:0,
      componentKey:0,
      modellist:[],
      submitted: false,
      chat: {
        message: "",
      },
    };
  },
  validations: {
    chat: {
      message: {
        required,
      },
    },
  },
  created() {
    this.fetchModels();
  },
  methods: {
    fetchModels () {
      this.modellist = [];
        db.collection('models').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let key = doc.id
            let model = doc.data()
            model.id = key;
            if(model.type == "MEN"){
              this.menlen++;
            }else if(model.type == 'WOMEN'){
              this.womenlen++;
            }else if(model.type == 'BOYS'){
              this.boyslen++;
            }else if(model.type == 'GIRLS'){
              this.girlslen++;
            }else if(model.type == 'TEEN BOYS'){
              this.teenboylen++;
            }else{
              this.teengirlen++;
            }
            this.modellist.push(model)        
          })
        })
        .catch(error => {
          console.log("Error reading document:", error);
        })
     
        this.componentKey++;
    },
    /**
     * Char form Submit
     */
    // eslint-disable-next-line no-unused-vars
    formSubmit(e) {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        const id = this.ChatData.length;
        const message = this.chat.message;
        const currentDate = new Date();
        this.ChatData.push({
          id: id + 1,
          align: "right",
          name: "Henry Wells",
          message,
          time: currentDate.getHours() + ":" + currentDate.getMinutes(),
        });
        this.handleScroll();
      }
      this.submitted = false;
      this.chat = {};
    },

    handleScroll() {
      if (this.$refs.current.$el) {
        setTimeout(() => {
          this.$refs.current.SimpleBar.getScrollElement().scrollTop =
            this.$refs.current.SimpleBar.getScrollElement().scrollHeight + 1500;
        }, 500);
      }
    },
  },
  mounted() {
    // var container2 = document.querySelector(
    //   "#containerElement .simplebar-content-wrapper"
    // );
    // container2.scrollTo({ top: 500, behavior: "smooth" });
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-3">
                <div class="media">
                  <div class="mr-3">
                    <img
                      src="@/assets/images/users/avatar-1.jpg"
                      alt
                      class="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <div class="media-body align-self-center">
                    <div class="text-muted">
                      <p class="mb-2">Welcome to skote dashboard</p>
                      <h5 class="mb-1">Henry wells</h5>
                      <p class="mb-0">Administrator</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-9 align-self-center">
                <div class="text-lg-center mt-4 mt-lg-0">
                  <div class="row">
                    <div class="col-2">
                      <div>
                        <p class="text-muted text-truncate mb-2">
                         MEN
                        </p>
                        <h5 class="mb-0" >{{menlen}}</h5>
                      </div>
                    </div>
                    <div class="col-2">
                      <div>
                        <p class="text-muted text-truncate mb-2">WOMEN</p>
                        <h5 class="mb-0">{{womenlen}}</h5>
                      </div>
                    </div>
                    <div class="col-2">
                      <div>
                        <p class="text-muted text-truncate mb-2">BOYS</p>
                        <h5 class="mb-0">{{boyslen}}</h5>
                      </div>
                    </div>
                     <div class="col-2">
                      <div>
                        <p class="text-muted text-truncate mb-2">
                          GIRLS
                        </p>
                        <h5 class="mb-0">{{girlslen}}</h5>
                      </div>
                    </div>
                    <div class="col-2">
                      <div>
                        <p class="text-muted text-truncate mb-2">TEEN BOYS</p>
                        <h5 class="mb-0">{{teenboylen}}</h5>
                      </div>
                    </div>
                    <div class="col-2">
                      <div>
                        <p class="text-muted text-truncate mb-2">TEEN GIRLS</p>
                        <h5 class="mb-0">{{teengirlen}}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <!-- end row -->
          </div>
        </div>
      </div>
    </div>
   
  </Layout>
</template>
