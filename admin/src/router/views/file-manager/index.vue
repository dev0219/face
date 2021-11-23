<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

export default {
  page: {
    title: "File Manager",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "File Manager",
      items: [
        {
          text: "Apps",
          href: "/",
        },
        {
          text: "File Manager",
          active: true,
        },
      ],
      series: [76],
      chartOptions: {
        chart: {
          height: 150,
          type: "radialBar",
          sparkline: {
            enabled: true,
          },
        },
        colors: ["#556ee6"],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5, // margin is in pixels
            },
            hollow: {
              size: "60%",
            },

            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: -2,
                fontSize: "16px",
              },
            },
          },
        },
        grid: {
          padding: {
            top: -10,
          },
        },
        stroke: {
          dashArray: 3,
        },
        labels: ["Storage"],
      },
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="d-xl-flex">
      <div class="w-100">
        <div class="d-md-flex">
          <div class="card filemanager-sidebar mr-md-2">
            <div class="card-body">
              <div class="d-flex flex-column h-100">
                <div class="mb-4">
                  <div class="mb-3">
                    <b-dropdown
                      toggle-class="btn-block"
                      variant="light"
                      class="btn-block"
                    >
                      <template #button-content>
                        <i class="mdi mdi-plus mr-1"></i> Create New
                      </template>

                      <b-dropdown-item href="#"
                        ><i class="bx bx-folder mr-1"></i>
                        Folder</b-dropdown-item
                      >
                      <b-dropdown-item href="#"
                        ><i class="bx bx-file mr-1"></i> File</b-dropdown-item
                      >
                    </b-dropdown>
                  </div>
                  <ul class="list-unstyled categories-list">
                    <li>
                      <div class="custom-accordion">
                        <a
                          class="text-body font-weight-medium py-1 d-flex align-items-center"
                          data-toggle="collapse"
                          v-b-toggle.categories-collapse
                          role="button"
                          aria-expanded="false"
                          aria-controls="categories-collapse"
                        >
                          <i
                            class="mdi mdi-folder font-size-16 text-warning mr-2"
                          ></i>
                          Files
                          <i
                            class="mdi mdi-chevron-up accor-down-icon ml-auto"
                          ></i>
                        </a>
                        <b-collapse
                          visible
                          class="collapse show"
                          id="categories-collapse"
                        >
                          <div class="card border-0 shadow-none pl-2 mb-0">
                            <ul class="list-unstyled mb-0">
                              <li>
                                <a href="#" class="d-flex align-items-center"
                                  ><span class="mr-auto">Design</span></a
                                >
                              </li>
                              <li>
                                <a href="#" class="d-flex align-items-center"
                                  ><span class="mr-auto">Development</span>
                                  <i class="mdi mdi-pin ml-auto"></i
                                ></a>
                              </li>
                              <li>
                                <a href="#" class="d-flex align-items-center"
                                  ><span class="mr-auto">Project A</span></a
                                >
                              </li>
                              <li>
                                <a href="#" class="d-flex align-items-center"
                                  ><span class="mr-auto">Admin</span>
                                  <i class="mdi mdi-pin ml-auto"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                        </b-collapse>
                      </div>
                    </li>
                    <li>
                      <a
                        href="javascript: void(0);"
                        class="text-body d-flex align-items-center"
                      >
                        <i
                          class="mdi mdi-google-drive font-size-16 text-muted mr-2"
                        ></i>
                        <span class="mr-auto">Google Drive</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript: void(0);"
                        class="text-body d-flex align-items-center"
                      >
                        <i
                          class="mdi mdi-dropbox font-size-16 mr-2 text-primary"
                        ></i>
                        <span class="mr-auto">Dropbox</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript: void(0);"
                        class="text-body d-flex align-items-center"
                      >
                        <i class="mdi mdi-share-variant font-size-16 mr-2"></i>
                        <span class="mr-auto">Shared</span>
                        <i class="mdi mdi-circle-medium text-danger ml-2"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript: void(0);"
                        class="text-body d-flex align-items-center"
                      >
                        <i
                          class="mdi mdi-star-outline text-muted font-size-16 mr-2"
                        ></i>
                        <span class="mr-auto">Starred</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript: void(0);"
                        class="text-body d-flex align-items-center"
                      >
                        <i
                          class="mdi mdi-trash-can text-danger font-size-16 mr-2"
                        ></i>
                        <span class="mr-auto">Trash</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript: void(0);"
                        class="text-body d-flex align-items-center"
                      >
                        <i class="mdi mdi-cog text-muted font-size-16 mr-2"></i>
                        <span class="mr-auto">Setting</span
                        ><span class="badge badge-success badge-pill ml-2"
                          >01</span
                        >
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="mt-auto">
                  <b-alert show dismissible variant="success">
                    <div class="mb-3">
                      <i class="bx bxs-folder-open h1 text-success"></i>
                    </div>

                    <div>
                      <h5 class="text-success">Upgrade Features</h5>
                      <p>Cum sociis natoque penatibus et</p>
                      <div class="text-center">
                        <button
                          type="button"
                          class="btn btn-link text-decoration-none text-success"
                        >
                          Upgrade <i class="mdi mdi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </b-alert>
                </div>
              </div>
            </div>
          </div>
          <!-- filemanager-leftsidebar -->

          <div class="w-100">
            <div class="card">
              <div class="card-body">
                <div>
                  <div class="row mb-3">
                    <div class="col-xl-3 col-sm-6">
                      <div class="mt-2">
                        <h5>My Files</h5>
                      </div>
                    </div>
                    <div class="col-xl-9 col-sm-6">
                      <form class="mt-4 mt-sm-0 float-sm-right form-inline">
                        <div class="search-box mb-2 mr-2">
                          <div class="position-relative">
                            <input
                              type="text"
                              class="form-control bg-light border-light rounded"
                              placeholder="Search..."
                            />
                            <i class="bx bx-search-alt search-icon"></i>
                          </div>
                        </div>

                        <b-dropdown
                          class="mb-0"
                          toggle-class="btn btn-link text-muted"
                          right
                          variant="white"
                        >
                          <template #button-content>
                            <i class="mdi mdi-dots-vertical font-size-20"></i>
                          </template>
                          <b-dropdown-item href="#"
                            >Share Files</b-dropdown-item
                          >
                          <b-dropdown-item href="#"
                            >Share with me</b-dropdown-item
                          >
                          <b-dropdown-item href="#"
                            >Other Actions</b-dropdown-item
                          >
                        </b-dropdown>
                      </form>
                    </div>
                  </div>
                </div>
                <hr class="mb-4" />
                <div>
                  <div class="row">
                    <div class="col-xl-4 col-sm-6">
                      <div class="card shadow-none border">
                        <div class="card-body p-3">
                          <div class="">
                            <div class="float-right ml-2">
                              <b-dropdown
                                toggle-class="font-size-16 text-muted p-0"
                                class="mb-2"
                                variant="white"
                                right
                              >
                                <template #button-content>
                                  <i class="mdi mdi-dots-horizontal"></i>
                                </template>

                                <b-dropdown-item href="#">Open</b-dropdown-item>
                                <b-dropdown-item href="#">Edit</b-dropdown-item>
                                <b-dropdown-item href="#"
                                  >Rename</b-dropdown-item
                                >
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item href="#"
                                  >Remove</b-dropdown-item
                                >
                              </b-dropdown>
                            </div>
                            <div class="avatar-xs mr-3 mb-3">
                              <div class="avatar-title bg-transparent rounded">
                                <i
                                  class="bx bxs-folder font-size-24 text-warning"
                                ></i>
                              </div>
                            </div>
                            <div class="d-flex">
                              <div class="overflow-hidden mr-auto">
                                <h5 class="font-size-14 text-truncate mb-1">
                                  <a
                                    href="javascript: void(0);"
                                    class="text-body"
                                    >Design</a
                                  >
                                </h5>
                                <p class="text-muted text-truncate mb-0">
                                  12 Files
                                </p>
                              </div>
                              <div class="align-self-end ml-2">
                                <p class="text-muted mb-0">6GB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end col -->

                    <div class="col-xl-4 col-sm-6">
                      <div class="card shadow-none border">
                        <div class="card-body p-3">
                          <div class="">
                            <div class="float-right ml-2">
                              <b-dropdown
                                toggle-class="font-size-16 text-muted p-0"
                                class="mb-2"
                                variant="white"
                                right
                              >
                                <template #button-content>
                                  <i class="mdi mdi-dots-horizontal"></i>
                                </template>

                                <b-dropdown-item href="#">Open</b-dropdown-item>
                                <b-dropdown-item href="#">Edit</b-dropdown-item>
                                <b-dropdown-item href="#"
                                  >Rename</b-dropdown-item
                                >
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item href="#"
                                  >Remove</b-dropdown-item
                                >
                              </b-dropdown>
                            </div>
                            <div class="avatar-xs mr-3 mb-3">
                              <div class="avatar-title bg-transparent rounded">
                                <i
                                  class="bx bxs-folder font-size-24 text-warning"
                                ></i>
                              </div>
                            </div>
                            <div class="d-flex">
                              <div class="overflow-hidden mr-auto">
                                <h5 class="font-size-14 text-truncate mb-1">
                                  <a
                                    href="javascript: void(0);"
                                    class="text-body"
                                    >Development</a
                                  >
                                </h5>
                                <p class="text-muted text-truncate mb-0">
                                  20 Files
                                </p>
                              </div>
                              <div class="align-self-end ml-2">
                                <p class="text-muted mb-0">8GB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end col -->

                    <div class="col-xl-4 col-sm-6">
                      <div class="card shadow-none border">
                        <div class="card-body p-3">
                          <div class="">
                            <div class="float-right ml-2">
                              <b-dropdown
                                toggle-class="font-size-16 text-muted p-0"
                                class="mb-2"
                                variant="white"
                                right
                              >
                                <template #button-content>
                                  <i class="mdi mdi-dots-horizontal"></i>
                                </template>

                                <b-dropdown-item href="#">Open</b-dropdown-item>
                                <b-dropdown-item href="#">Edit</b-dropdown-item>
                                <b-dropdown-item href="#"
                                  >Rename</b-dropdown-item
                                >
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item href="#"
                                  >Remove</b-dropdown-item
                                >
                              </b-dropdown>
                            </div>
                            <div class="avatar-xs mr-3 mb-3">
                              <div class="avatar-title bg-transparent rounded">
                                <i
                                  class="bx bxs-folder font-size-24 text-warning"
                                ></i>
                              </div>
                            </div>
                            <div class="d-flex">
                              <div class="overflow-hidden mr-auto">
                                <h5 class="font-size-14 text-truncate mb-1">
                                  <a
                                    href="javascript: void(0);"
                                    class="text-body"
                                    >Project A</a
                                  >
                                </h5>
                                <p class="text-muted text-truncate mb-0">
                                  06 Files
                                </p>
                              </div>
                              <div class="align-self-end ml-2">
                                <p class="text-muted mb-0">2GB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end col -->

                    <div class="col-xl-4 col-sm-6">
                      <div class="card shadow-none border">
                        <div class="card-body p-3">
                          <div class="">
                            <div class="float-right ml-2">
                              <b-dropdown
                                toggle-class="font-size-16 text-muted p-0"
                                class="mb-2"
                                variant="white"
                                right
                              >
                                <template #button-content>
                                  <i class="mdi mdi-dots-horizontal"></i>
                                </template>

                                <b-dropdown-item href="#">Open</b-dropdown-item>
                                <b-dropdown-item href="#">Edit</b-dropdown-item>
                                <b-dropdown-item href="#"
                                  >Rename</b-dropdown-item
                                >
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item href="#"
                                  >Remove</b-dropdown-item
                                >
                              </b-dropdown>
                            </div>
                            <div class="avatar-xs mr-3 mb-3">
                              <div class="avatar-title bg-transparent rounded">
                                <i
                                  class="bx bxs-folder font-size-24 text-warning"
                                ></i>
                              </div>
                            </div>
                            <div class="d-flex">
                              <div class="overflow-hidden mr-auto">
                                <h5 class="font-size-14 text-truncate mb-1">
                                  <a
                                    href="javascript: void(0);"
                                    class="text-body"
                                    >Admin</a
                                  >
                                </h5>
                                <p class="text-muted text-truncate mb-0">
                                  08 Files
                                </p>
                              </div>
                              <div class="align-self-end ml-2">
                                <p class="text-muted mb-0">4GB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end col -->

                    <div class="col-xl-4 col-sm-6">
                      <div class="card shadow-none border">
                        <div class="card-body p-3">
                          <div class="">
                            <div class="float-right ml-2">
                              <b-dropdown
                                toggle-class="font-size-16 text-muted p-0"
                                class="mb-2"
                                variant="white"
                                right
                              >
                                <template #button-content>
                                  <i class="mdi mdi-dots-horizontal"></i>
                                </template>

                                <b-dropdown-item href="#">Open</b-dropdown-item>
                                <b-dropdown-item href="#">Edit</b-dropdown-item>
                                <b-dropdown-item href="#"
                                  >Rename</b-dropdown-item
                                >
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item href="#"
                                  >Remove</b-dropdown-item
                                >
                              </b-dropdown>
                            </div>
                            <div class="avatar-xs mr-3 mb-3">
                              <div class="avatar-title bg-transparent rounded">
                                <i
                                  class="bx bxs-folder font-size-24 text-warning"
                                ></i>
                              </div>
                            </div>
                            <div class="d-flex">
                              <div class="overflow-hidden mr-auto">
                                <h5 class="font-size-14 text-truncate mb-1">
                                  <a
                                    href="javascript: void(0);"
                                    class="text-body"
                                    >Sketch Design</a
                                  >
                                </h5>
                                <p class="text-muted text-truncate mb-0">
                                  12 Files
                                </p>
                              </div>
                              <div class="align-self-end ml-2">
                                <p class="text-muted mb-0">6GB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end col -->

                    <div class="col-xl-4 col-sm-6">
                      <div class="card shadow-none border">
                        <div class="card-body p-3">
                          <div class="">
                            <div class="float-right ml-2">
                              <b-dropdown
                                toggle-class="font-size-16 text-muted p-0"
                                class="mb-2"
                                variant="white"
                                right
                              >
                                <template #button-content>
                                  <i class="mdi mdi-dots-horizontal"></i>
                                </template>

                                <b-dropdown-item href="#">Open</b-dropdown-item>
                                <b-dropdown-item href="#">Edit</b-dropdown-item>
                                <b-dropdown-item href="#"
                                  >Rename</b-dropdown-item
                                >
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item href="#"
                                  >Remove</b-dropdown-item
                                >
                              </b-dropdown>
                            </div>
                            <div class="avatar-xs mr-3 mb-3">
                              <div class="avatar-title bg-transparent rounded">
                                <i
                                  class="bx bxs-folder font-size-24 text-warning"
                                ></i>
                              </div>
                            </div>
                            <div class="d-flex">
                              <div class="overflow-hidden mr-auto">
                                <h5 class="font-size-14 text-truncate mb-1">
                                  <a
                                    href="javascript: void(0);"
                                    class="text-body"
                                    >Applications</a
                                  >
                                </h5>
                                <p class="text-muted text-truncate mb-0">
                                  20 Files
                                </p>
                              </div>
                              <div class="align-self-end ml-2">
                                <p class="text-muted mb-0">8GB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->
                </div>

                <div class="mt-4">
                  <div class="d-flex flex-wrap">
                    <h5 class="font-size-14 mr-3">Recent Files</h5>

                    <div class="ml-auto">
                      <a href="javascript: void(0);">View All</a>
                    </div>
                  </div>
                  <hr class="mt-2" />

                  <div class="table-responsive">
                    <table
                      class="table table-centered table-nowrap table-hover mb-0"
                    >
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Date modified</th>
                          <th scope="col" colspan="2">Size</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a
                              href="javascript: void(0);"
                              class="text-dark font-weight-medium"
                              ><i
                                class="mdi mdi-file-document font-size-16 align-middle text-primary mr-2"
                              ></i>
                              index.html</a
                            >
                          </td>
                          <td>12-10-2020, 09:45</td>
                          <td>09 KB</td>
                          <td>
                            <b-dropdown
                              toggle-class="font-size-16 text-muted p-0"
                              variant="white"
                              right
                            >
                              <template #button-content>
                                <i class="mdi mdi-dots-horizontal"></i>
                              </template>

                              <b-dropdown-item href="#">Open</b-dropdown-item>
                              <b-dropdown-item href="#">Edit</b-dropdown-item>
                              <b-dropdown-item href="#">Rename</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="#">Remove</b-dropdown-item>
                            </b-dropdown>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="javascript: void(0);"
                              class="text-dark font-weight-medium"
                              ><i
                                class="mdi mdi-folder-zip font-size-16 align-middle text-warning mr-2"
                              ></i>
                              Project-A.zip</a
                            >
                          </td>
                          <td>11-10-2020, 17:05</td>
                          <td>115 KB</td>
                          <td>
                            <b-dropdown
                              toggle-class="font-size-16 text-muted p-0"
                              variant="white"
                              right
                            >
                              <template #button-content>
                                <i class="mdi mdi-dots-horizontal"></i>
                              </template>

                              <b-dropdown-item href="#">Open</b-dropdown-item>
                              <b-dropdown-item href="#">Edit</b-dropdown-item>
                              <b-dropdown-item href="#">Rename</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="#">Remove</b-dropdown-item>
                            </b-dropdown>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="javascript: void(0);"
                              class="text-dark font-weight-medium"
                              ><i
                                class="mdi mdi-image font-size-16 align-middle text-muted mr-2"
                              ></i>
                              Img-1.jpeg</a
                            >
                          </td>
                          <td>11-10-2020, 13:26</td>
                          <td>86 KB</td>
                          <td>
                            <b-dropdown
                              toggle-class="font-size-16 text-muted p-0"
                              variant="white"
                              right
                            >
                              <template #button-content>
                                <i class="mdi mdi-dots-horizontal"></i>
                              </template>

                              <b-dropdown-item href="#">Open</b-dropdown-item>
                              <b-dropdown-item href="#">Edit</b-dropdown-item>
                              <b-dropdown-item href="#">Rename</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="#">Remove</b-dropdown-item>
                            </b-dropdown>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="javascript: void(0);"
                              class="text-dark font-weight-medium"
                              ><i
                                class="mdi mdi-text-box font-size-16 align-middle text-muted mr-2"
                              ></i>
                              update list.txt</a
                            >
                          </td>
                          <td>10-10-2020, 11:32</td>
                          <td>08 KB</td>
                          <td>
                            <b-dropdown
                              toggle-class="font-size-16 text-muted p-0"
                              variant="white"
                              right
                            >
                              <template #button-content>
                                <i class="mdi mdi-dots-horizontal"></i>
                              </template>

                              <b-dropdown-item href="#">Open</b-dropdown-item>
                              <b-dropdown-item href="#">Edit</b-dropdown-item>
                              <b-dropdown-item href="#">Rename</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="#">Remove</b-dropdown-item>
                            </b-dropdown>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="javascript: void(0);"
                              class="text-dark font-weight-medium"
                              ><i
                                class="mdi mdi-folder font-size-16 align-middle text-warning mr-2"
                              ></i>
                              Project B</a
                            >
                          </td>
                          <td>10-10-2020, 10:51</td>
                          <td>72 KB</td>
                          <td>
                            <b-dropdown
                              toggle-class="font-size-16 text-muted p-0"
                              variant="white"
                              right
                            >
                              <template #button-content>
                                <i class="mdi mdi-dots-horizontal"></i>
                              </template>

                              <b-dropdown-item href="#">Open</b-dropdown-item>
                              <b-dropdown-item href="#">Edit</b-dropdown-item>
                              <b-dropdown-item href="#">Rename</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="#">Remove</b-dropdown-item>
                            </b-dropdown>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="javascript: void(0);"
                              class="text-dark font-weight-medium"
                              ><i
                                class="mdi mdi-text-box font-size-16 align-middle text-muted mr-2"
                              ></i>
                              Changes list.txt</a
                            >
                          </td>
                          <td>09-10-2020, 17:05</td>
                          <td>07 KB</td>
                          <td>
                            <b-dropdown
                              toggle-class="font-size-16 text-muted p-0"
                              variant="white"
                              right
                            >
                              <template #button-content>
                                <i class="mdi mdi-dots-horizontal"></i>
                              </template>

                              <b-dropdown-item href="#">Open</b-dropdown-item>
                              <b-dropdown-item href="#">Edit</b-dropdown-item>
                              <b-dropdown-item href="#">Rename</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="#">Remove</b-dropdown-item>
                            </b-dropdown>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="javascript: void(0);"
                              class="text-dark font-weight-medium"
                              ><i
                                class="mdi mdi-image font-size-16 align-middle text-success mr-2"
                              ></i>
                              Img-2.png</a
                            >
                          </td>
                          <td>09-10-2020, 15:12</td>
                          <td>31 KB</td>
                          <td>
                            <b-dropdown
                              toggle-class="font-size-16 text-muted p-0"
                              variant="white"
                              right
                            >
                              <template #button-content>
                                <i class="mdi mdi-dots-horizontal"></i>
                              </template>

                              <b-dropdown-item href="#">Open</b-dropdown-item>
                              <b-dropdown-item href="#">Edit</b-dropdown-item>
                              <b-dropdown-item href="#">Rename</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="#">Remove</b-dropdown-item>
                            </b-dropdown>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="javascript: void(0);"
                              class="text-dark font-weight-medium"
                              ><i
                                class="mdi mdi-folder font-size-16 align-middle text-warning mr-2"
                              ></i>
                              Project C</a
                            >
                          </td>
                          <td>09-10-2020, 10:11</td>
                          <td>20 KB</td>
                          <td>
                            <b-dropdown
                              toggle-class="font-size-16 text-muted p-0"
                              variant="white"
                              right
                            >
                              <template #button-content>
                                <i class="mdi mdi-dots-horizontal"></i>
                              </template>

                              <b-dropdown-item href="#">Open</b-dropdown-item>
                              <b-dropdown-item href="#">Edit</b-dropdown-item>
                              <b-dropdown-item href="#">Rename</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="#">Remove</b-dropdown-item>
                            </b-dropdown>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="javascript: void(0);"
                              class="text-dark font-weight-medium"
                              ><i
                                class="bx bxs-file font-size-16 align-middle text-primary mr-2"
                              ></i>
                              starter-page.html</a
                            >
                          </td>
                          <td>08-10-2020, 03:22</td>
                          <td>11 KB</td>
                          <td>
                            <b-dropdown
                              toggle-class="font-size-16 text-muted p-0"
                              variant="white"
                              right
                            >
                              <template #button-content>
                                <i class="mdi mdi-dots-horizontal"></i>
                              </template>

                              <b-dropdown-item href="#">Open</b-dropdown-item>
                              <b-dropdown-item href="#">Edit</b-dropdown-item>
                              <b-dropdown-item href="#">Rename</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item href="#">Remove</b-dropdown-item>
                            </b-dropdown>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!-- end card -->
          </div>
          <!-- end w-100 -->
        </div>
      </div>

      <div class="card filemanager-sidebar ml-lg-2">
        <div class="card-body">
          <div class="text-center">
            <h5 class="font-size-15 mb-4">Storage</h5>
            <apexchart
              class="apex-charts"
              type="radialBar"
              height="150"
              dir="ltr"
              :series="series"
              :options="chartOptions"
            ></apexchart>

            <p class="text-muted mt-4">48.02 GB (76%) of 64 GB used</p>
          </div>

          <div class="mt-4">
            <div class="card border shadow-none mb-2">
              <a href="javascript: void(0);" class="text-body">
                <div class="p-2">
                  <div class="d-flex">
                    <div class="avatar-xs align-self-center mr-2">
                      <div
                        class="avatar-title rounded bg-transparent text-success font-size-20"
                      >
                        <i class="mdi mdi-image"></i>
                      </div>
                    </div>

                    <div class="overflow-hidden mr-auto">
                      <h5 class="font-size-13 text-truncate mb-1">Images</h5>
                      <p class="text-muted text-truncate mb-0">176 Files</p>
                    </div>

                    <div class="ml-2">
                      <p class="text-muted">6 GB</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div class="card border shadow-none mb-2">
              <a href="javascript: void(0);" class="text-body">
                <div class="p-2">
                  <div class="d-flex">
                    <div class="avatar-xs align-self-center mr-2">
                      <div
                        class="avatar-title rounded bg-transparent text-danger font-size-20"
                      >
                        <i class="mdi mdi-play-circle-outline"></i>
                      </div>
                    </div>

                    <div class="overflow-hidden mr-auto">
                      <h5 class="font-size-13 text-truncate mb-1">Video</h5>
                      <p class="text-muted text-truncate mb-0">45 Files</p>
                    </div>

                    <div class="ml-2">
                      <p class="text-muted">4.1 GB</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div class="card border shadow-none mb-2">
              <a href="javascript: void(0);" class="text-body">
                <div class="p-2">
                  <div class="d-flex">
                    <div class="avatar-xs align-self-center mr-2">
                      <div
                        class="avatar-title rounded bg-transparent text-info font-size-20"
                      >
                        <i class="mdi mdi-music"></i>
                      </div>
                    </div>

                    <div class="overflow-hidden mr-auto">
                      <h5 class="font-size-13 text-truncate mb-1">Music</h5>
                      <p class="text-muted text-truncate mb-0">21 Files</p>
                    </div>

                    <div class="ml-2">
                      <p class="text-muted">3.2 GB</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div class="card border shadow-none mb-2">
              <a href="javascript: void(0);" class="text-body">
                <div class="p-2">
                  <div class="d-flex">
                    <div class="avatar-xs align-self-center mr-2">
                      <div
                        class="avatar-title rounded bg-transparent text-primary font-size-20"
                      >
                        <i class="mdi mdi-file-document"></i>
                      </div>
                    </div>

                    <div class="overflow-hidden mr-auto">
                      <h5 class="font-size-13 text-truncate mb-1">Document</h5>
                      <p class="text-muted text-truncate mb-0">21 Files</p>
                    </div>

                    <div class="ml-2">
                      <p class="text-muted">2 GB</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div class="card border shadow-none">
              <a href="javascript: void(0);" class="text-body">
                <div class="p-2">
                  <div class="d-flex">
                    <div class="avatar-xs align-self-center mr-2">
                      <div
                        class="avatar-title rounded bg-transparent text-warning font-size-20"
                      >
                        <i class="mdi mdi-folder"></i>
                      </div>
                    </div>

                    <div class="overflow-hidden mr-auto">
                      <h5 class="font-size-13 text-truncate mb-1">Others</h5>
                      <p class="text-muted text-truncate mb-0">20 Files</p>
                    </div>

                    <div class="ml-2">
                      <p class="text-muted">1.4 GB</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>