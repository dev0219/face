<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Form-element component
 */
export default {
  page: {
    title: "Form Elements",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Form Elements",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Form Elements",
          active: true,
        },
      ],
      selectedprimary: "primary",
      selectedinfo: "info",
      selecteddanger: "danger",
      selectedwarning: "warning",
      selectedsuccess: "success",
      selectedToogle: "A",
      selectedDefault: "a",
      status: "accepted",
      rightcheck: "accepted",
      primarycheck: "accepted",
      successcheck: "accepted",
      infocheck: "accepted",
      warningcheck: "accepted",
      dangercheck: "accepted",
      primaryoutlinecheck: "accepted",
      infooutlinecheck: "accepted",
      warningoutlinecheck: "accepted",
      dangeroutlinecheck: "accepted",
      checked: true,
      smchecked: true,
      lgchecked: true,
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Textual inputs</h4>
            <p class="card-title-desc">
              Here are examples of
              <code>.form-control</code> applied to each textual HTML5
              <code>&lt;input&gt;</code>
              <code>type</code>.
            </p>

            <div class="row">
              <div class="col-12">
                <form class="form-horizontal" role="form">
                  <b-form-group
                    id="example text"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Text"
                    label-for="text"
                  >
                    <b-form-input
                      for="text"
                      value="Artisanal kale"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-search"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Search"
                    label-for="search"
                  >
                    <b-form-input
                      id="search"
                      value="How do I shoot web"
                      type="search"
                      name="search"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-email"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Email"
                    label-for="email"
                  >
                    <b-form-input
                      id="email"
                      value="bootstrap@example.com"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-url"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="URL"
                    label-for="url"
                  >
                    <b-form-input
                      id="url"
                      value="https://getbootstrap.com"
                      type="url"
                      name="url"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-tel"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Telephone"
                    label-for="tele"
                  >
                    <b-form-input
                      id="tele"
                      value="1-(555)-555-5555"
                      type="tel"
                      name="tel"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-password"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Password"
                    label-for="pwd"
                  >
                    <b-form-input
                      id="pwd"
                      type="password"
                      value="password"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-number"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Number"
                    label-for="number"
                  >
                    <b-form-input
                      id="number"
                      value="42"
                      type="number"
                      name="number"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-date-time"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Date and time"
                    label-for="date-time"
                  >
                    <b-form-input
                      id="date-time"
                      value="2019-08-19T13:45:00"
                      type="datetime-local"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-date"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Date"
                    label-for="date"
                  >
                    <b-form-input
                      id="date"
                      value="2019-08-19"
                      type="date"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-month"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Month"
                    label-for="month"
                  >
                    <b-form-input
                      id="month"
                      value="2019-08"
                      type="month"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-week"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Week"
                    label-for="week"
                  >
                    <b-form-input
                      id="week"
                      value="2019-W33"
                      type="week"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-time"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Time"
                    label-for="time"
                  >
                    <b-form-input
                      id="time"
                      value="13:45:00"
                      type="time"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-color"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Color"
                    label-for="color"
                  >
                    <b-form-input
                      id="color"
                      type="color"
                      name="color"
                      value="#556ee6"
                    ></b-form-input>
                  </b-form-group>

                  <div class="form-group row">
                    <label class="col-md-2 col-form-label">Select</label>
                    <div class="col-md-10">
                      <select class="form-control">
                        <option>Select</option>
                        <option>Large select</option>
                        <option>Small select</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label class="col-md-2 col-form-label">Custom Select</label>
                    <div class="col-md-10">
                      <select class="custom-select">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Sizing</h4>
            <p class="card-title-desc">
              Set heights using size like
              <code>lg</code> and <code>sm</code>.
            </p>
            <div>
              <div class="mb-4">
                <b-form-input
                  id="input-md"
                  placeholder="Default input"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <b-form-input
                  id="input-small"
                  size="sm"
                  placeholder=".form-control-sm"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <b-form-input
                  id="input-lg"
                  size="lg"
                  placeholder=".form-control-lg"
                ></b-form-input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Range Inputs</h4>
            <p class="card-title-desc">
              Set horizontally scrollable range inputs using
              <code>.form-control-range</code>.
            </p>

            <div>
              <h5 class="font-size-14">Example</h5>
              <input
                id="formControlRange"
                type="range"
                class="form-control-range"
              />
            </div>
            <div class="mt-4">
              <h5 class="font-size-14">Custom Range</h5>
              <b-form-input id="custom-range" type="range"></b-form-input>

              <b-form-input
                id="customRange2"
                class="mt-4"
                type="range"
                min="0"
                max="5"
              ></b-form-input>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Checkboxes</h4>

            <div class="row">
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary mr-1"></i>
                    Default Checkboxes
                  </h5>
                  <b-form-checkbox
                    value="accepted"
                    unchecked-value="not_accepted"
                    class="mb-3"
                    checked
                    plain
                    >Default checkbox</b-form-checkbox
                  >

                  <b-form-checkbox
                    value="accepted"
                    unchecked-value="not_accepted"
                    class="form-check-right"
                    v-model="rightcheck"
                    plain
                    >Default checkbox Right</b-form-checkbox
                  >
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary mr-1"></i> Custom
                    Checkboxes
                  </h5>

                  <b-form-checkbox
                    v-model="status"
                    value="accepted"
                    unchecked-value="not_accepted"
                    class="custom-checkbox mb-3"
                    checked
                    >Custom checkbox Right</b-form-checkbox
                  >
                  <b-form-checkbox
                    value="accepted"
                    unchecked-value="not_accepted"
                    class="custom-checkbox custom-control-right"
                    checked
                    >Custom checkbox Right</b-form-checkbox
                  >
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary mr-1"></i> Custom
                    Checkboxes colors
                  </h5>
                  <p class="sub-header mb-4">
                    Add class
                    <code>.custom-checkbox-*</code> for a color Checkboxes
                  </p>

                  <div>
                    <b-form-checkbox
                      v-model="primarycheck"
                      value="accepted"
                      unchecked-value="not_accepted"
                      class="custom-checkbox-primary mb-3"
                      checked
                      >Checkbox Primary</b-form-checkbox
                    >

                    <b-form-checkbox
                      v-model="successcheck"
                      value="accepted"
                      unchecked-value="not_accepted"
                      class="custom-checkbox-success mb-3"
                      checked
                      >Checkbox Success</b-form-checkbox
                    >

                    <b-form-checkbox
                      v-model="infocheck"
                      value="accepted"
                      unchecked-value="not_accepted"
                      class="custom-checkbox-info mb-3"
                      checked
                      >Checkbox Info</b-form-checkbox
                    >

                    <b-form-checkbox
                      v-model="warningcheck"
                      value="accepted"
                      unchecked-value="not_accepted"
                      class="custom-checkbox-warning mb-3"
                      checked
                      >Checkbox Warning</b-form-checkbox
                    >

                    <b-form-checkbox
                      v-model="dangercheck"
                      value="accepted"
                      unchecked-value="not_accepted"
                      class="custom-checkbox-danger mb-3"
                      checked
                      >Checkbox Danger</b-form-checkbox
                    >
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary mr-1"></i> Custom
                    Checkboxes Outline
                  </h5>
                  <p class="sub-header mb-4">
                    Add class
                    <code>custom-checkbox-outline</code> &amp;
                    <code>.custom-checkbox-*</code> for a color Checkboxes
                  </p>

                  <div>
                    <b-form-checkbox
                      v-model="primaryoutlinecheck"
                      value="accepted"
                      unchecked-value="not_accepted"
                      class="custom-checkbox custom-checkbox-outline custom-checkbox-primary mb-3"
                      checked
                      >Checkbox Primary</b-form-checkbox
                    >

                    <b-form-checkbox
                      value="accepted"
                      unchecked-value="not_accepted"
                      class="custom-checkbox custom-checkbox-outline custom-checkbox-success mb-3"
                      checked
                      >Checkbox Success</b-form-checkbox
                    >

                    <b-form-checkbox
                      v-model="infooutlinecheck"
                      value="accepted"
                      unchecked-value="not_accepted"
                      class="custom-checkbox custom-checkbox-outline custom-checkbox-info mb-3"
                      checked
                      >Checkbox Info</b-form-checkbox
                    >

                    <b-form-checkbox
                      v-model="warningoutlinecheck"
                      value="accepted"
                      unchecked-value="not_accepted"
                      class="custom-checkbox custom-checkbox-outline custom-checkbox-warning mb-3"
                      checked
                      >Checkbox Warning</b-form-checkbox
                    >

                    <b-form-checkbox
                      v-model="dangeroutlinecheck"
                      value="accepted"
                      unchecked-value="not_accepted"
                      class="custom-checkbox custom-checkbox-outline custom-checkbox-danger mb-3"
                      checked
                      >Checkbox Danger</b-form-checkbox
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Radios</h4>

            <div class="row">
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">Default Radios</h5>

                  <b-form-group>
                    <b-form-radio
                      v-model="selectedDefault"
                      class="mb-3"
                      value="a"
                      plain
                      >Default radio</b-form-radio
                    >
                    <b-form-radio
                      v-model="selectedDefault"
                      class="form-check-right"
                      value="b"
                      plain
                      >Default radio Right</b-form-radio
                    >
                  </b-form-group>
                </div>
              </div>

              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">Custom Radios</h5>

                  <b-form-group>
                    <b-form-radio
                      v-model="selectedToogle"
                      class="custom-radio mb-3"
                      value="A"
                      >Toggle this custom radio</b-form-radio
                    >
                    <b-form-radio
                      v-model="selectedToogle"
                      class="custom-control-right"
                      value="B"
                      >Or toggle this Right custom radio</b-form-radio
                    >
                  </b-form-group>
                </div>
              </div>

              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary mr-1"></i> Custom
                    Radio colors
                  </h5>
                  <p class="sub-header mb-4">
                    Add class
                    <code>.custom-radio-*</code> for a color Radios
                  </p>

                  <div>
                    <b-form-radio
                      class="custom-radio custom-radio-primary mb-3"
                      value="primary"
                      v-model="selectedprimary"
                      >Custom Radio Primary</b-form-radio
                    >
                    <b-form-radio
                      class="custom-radio custom-radio-success mb-3"
                      value="success"
                      v-model="selectedsuccess"
                      >Custom Radio Success</b-form-radio
                    >
                    <b-form-radio
                      class="custom-radio custom-radio-info mb-3"
                      value="info"
                      v-model="selectedinfo"
                      >Custom Radio Info</b-form-radio
                    >
                    <b-form-radio
                      class="custom-radio custom-radio-warning mb-3"
                      value="warning"
                      v-model="selectedwarning"
                      >Custom Radio Warning</b-form-radio
                    >
                    <b-form-radio
                      class="custom-radio custom-radio-danger"
                      value="danger"
                      v-model="selecteddanger"
                      >Custom Radio Danger</b-form-radio
                    >
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary mr-1"></i> Custom
                    Radio Outline
                  </h5>
                  <p class="sub-header mb-4">
                    Add class
                    <code>custom-radio-outline</code> &amp;
                    <code>.custom-radio-*</code> for a color Checkboxes
                  </p>

                  <div>
                    <b-form-radio
                      class="custom-radio custom-radio-outline custom-radio-primary mb-3"
                      value="primary"
                      v-model="selectedprimary"
                      >Radio Outline Primary</b-form-radio
                    >
                    <b-form-radio
                      class="custom-radio custom-radio-outline custom-radio-success mb-3"
                      value="success"
                      >Radio Outline Success</b-form-radio
                    >
                    <b-form-radio
                      class="custom-radio custom-radio-outline custom-radio-info mb-3"
                      value="info"
                      v-model="selectedinfo"
                      >Radio Outline Info</b-form-radio
                    >
                    <b-form-radio
                      class="custom-radio custom-radio-outline custom-radio-warning mb-3"
                      value="warning"
                      v-model="selectedwarning"
                      >Radio Outline Warning</b-form-radio
                    >
                    <b-form-radio
                      class="custom-radio custom-radio-outline custom-radio-danger"
                      value="danger"
                      v-model="selecteddanger"
                      >Radio Outline Danger</b-form-radio
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Switches</h4>
            <p class="card-title-desc">
              A switch has the markup of a custom checkbox but uses the
              <code>.custom-switch</code> class to render a toggle switch.
              Switches also support the <code>disabled</code> attribute.
            </p>

            <div class="row">
              <div class="col-lg-6">
                <div>
                  <h5 class="font-size-14 mb-3">Switch examples</h5>
                  <b-form-checkbox v-model="checked" switch class="mb-1">
                    <label>Toggle this switch element</label>
                  </b-form-checkbox>
                  <b-form-checkbox switch disabled>
                    <label>Disabled switch element</label>
                  </b-form-checkbox>
                </div>
              </div>
              <div class="col-lg-6">
                <h5 class="font-size-14 mb-3">Switch sizes</h5>
                <b-form-checkbox
                  switch
                  size="sm"
                  class="mb-3"
                  v-model="smchecked"
                  >Small Size Switch</b-form-checkbox
                >
                <b-form-checkbox switch class="mb-3"
                  >Medium Size Switch</b-form-checkbox
                >
                <b-form-checkbox switch size="lg" v-model="lgchecked"
                  >Large Size Switch</b-form-checkbox
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">File browser</h4>
            <p class="card-title-desc">
              The file input is the most gnarly of the bunch and requires
              additional JavaScript if you’d like to hook them up with
              functional
              <em>Choose file…</em> and selected file name text.
            </p>
            <div class="custom-file">
              <input id="customFile" type="file" class="custom-file-input" />
              <label class="custom-file-label" for="customFile"
                >Choose file</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">File browser</h4>
            <p class="card-title-desc">
              The file input is the most gnarly of the bunch and requires
              additional JavaScript if you’d like to hook them up with
              functional <em>Choose file…</em> and selected file name text.
            </p>

            <div class="row">
              <div class="col-sm-6">
                <div class="custom-file mb-3">
                  <b-form-file
                    id="file-small"
                    placeholder="Choose file"
                  ></b-form-file>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14">With Label</h5>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text"
                        id="inputGroupFileAddonwithlabel"
                        >Upload</span
                      >
                    </div>
                    <b-form-file
                      id="file-with-label"
                      placeholder="Choose file"
                    ></b-form-file>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-transparent"
                        id="inputGroupFileAddonwithlabelicon01"
                        ><i class="bx bxs-folder-open"></i
                      ></span>
                    </div>
                    <b-form-file
                      id="file-with-icon"
                      placeholder="Choose file"
                    ></b-form-file>
                  </div>

                  <div class="input-group">
                    <b-form-file
                      id="file-with-icon-end"
                      placeholder="Choose file"
                    ></b-form-file>

                    <div class="input-group-append">
                      <span
                        class="input-group-text bg-transparent"
                        id="inputGroupFileAddonwithlabelicon01"
                        ><i class="bx bxs-folder-open"></i
                      ></span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14">With Button</h5>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-primary"
                        type="button"
                        id="inputGroupFileAddon03"
                      >
                        Button
                      </button>
                    </div>
                     <b-form-file
                      id="file-with-button"
                      placeholder="Choose file"
                    ></b-form-file>
                  </div>

                  <div class="input-group">
                      <b-form-file
                      id="file-with-button2"
                      placeholder="Choose file"
                    ></b-form-file>
                    <div class="input-group-append">
                      <button
                        class="btn btn-primary"
                        type="button"
                        id="inputGroupFileAddon04"
                      >
                        Button
                      </button>
                    </div>
                  </div>
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