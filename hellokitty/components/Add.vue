<template>
<div class="right-content">
	<!-- This is nav -->
	<div class="topNav">
			 <b-navbar toggleable="lg" variant="success">
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" >Search</b-button>
                    </b-nav-form>
                    <b-nav-item href="#">Home</b-nav-item>
                    <b-nav-item href="#">Sign Out</b-nav-item>  
                </b-navbar-nav>
            </b-navbar>
	</div>
    <div class="wrapper"> 
        <b-row class="textcontent">
            <b-col md="6" offset-md="4">ADD PROJECT</b-col>
        </b-row>
    </div>
	<!-- this is list -->
    <div class="Addlist">
        <b-container fluid>
            <b-row class="my-1" v-for="type in types" :key="type">
                <b-col sm="3">
                    <label :for="`type-${type}`">{{ type }}:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
                </b-col>
            </b-row>

              <b-row class="my-1">
                <b-col sm="3">
                    <label>Thumbnail small:</label>
                </b-col>
                 <b-col sm="9">
                      <b-form-file 
                            accept = ".jpg, .png, .gif"
                            v-model="onImageChange"
                            :state="Boolean(file)"
                            placeholder="Choose a file..."
                            drop-placeholder="Drop file here..."
                            
                        ></b-form-file>
                 </b-col>
            </b-row>

              <b-row class="my-1">
                <b-col sm="3">
                    <label>Thumbnail large:</label>
                </b-col>
                 <b-col sm="9">
                      <b-form-file 
                            accept = ".jpg, .png, .gif"
                            v-model="onImageChange"
                            :state="Boolean(file)"
                            placeholder="Choose a file..."
                            drop-placeholder="Drop file here..."
                        ></b-form-file>
                 </b-col>
            </b-row>
            
            <b-row class="my-1" v-for="type in tyleText" :key="type">
                <b-col sm="3">
                    <label :for="`tyle-${ tyle }`">{{ type }}:</label>
                </b-col>
                 <b-col sm="9">
                    <b-form-textarea
                        id="textarea"
                        v-model="tyle"
                        placeholder="Enter something..."
                        rows="3"
                        max-rows="6"
                    ></b-form-textarea>
                 </b-col>
            </b-row>
            
            <b-row class="my-1">
                <b-col sm="3">
                    <b-form-group label="Using options style:"></b-form-group>
                </b-col>
                 <b-col sm="9">
                    <b-form-checkbox-group
                        id="checkbox-group-1"
                        v-model="selected"
                        :options="options"
                        name="flavour-1"
                    ></b-form-checkbox-group>
                 </b-col>
            </b-row>
        </b-container>
    </div>
    <div class="btSave">
        <b-button variant="outline-success" href="./addpage">Save</b-button>
    </div>
</div>

   
</template>

<script>
export default {
    name: 'Add',
    data() {
      return {
        file: null,
        types: [
          'Name',
          'ShortDescription',
        ],
        tyleText: [
           'Description'
        ],
        selected: [], 
        options: [
          { text: 'Web', value: 'web' },
          { text: 'Mobile', value: 'mobile' },
          { text: 'Table', value: 'table' },
        ],
      }
    }
}
</script>

<style scoped lang="scss">
  @import "~assets/styles/mixins";
  @import "~assets/styles/variables";

.right-content {
    float: left;
    width: 84%;
    height: 800px;
    .topNav {
        height: 50px;
        width: 100%; 
        border: 1px solid rgba(0,0,0,.0625);
        .LG {
            list-style-type: none;
            li {
                float: left;
                width: 120px;
                height: 40px;
                line-height: 40px;
                a span {
                    color: #B8860B;
                    font-weight: bold;
                }
            }
        }
    }
    .wrapper {
        margin:10px 0px;
        height: 100px;
        width: 100%; 
        background-image:  url("../static/site_bg.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.9;
        .textcontent {
            color: aliceblue;
            font-size: 25px;
            font-weight: 400;
            padding-top: 20px;
        }
    }
    .btSave {
        margin-left: 40%;
    }
}

</style>
