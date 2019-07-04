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
            <b-col md="6" offset-md="4">ADD PAGE</b-col>
        </b-row>
    </div>
       <div class="ContentPage">
        <b-tabs content-class="mt-3">
                                    <!-- Tab web -->
            <b-tab title="Web" active> 
                <div v-for="slide of slides" :key="slide">
                    <div>
                        <b-container fluid>
                            <b-row class="my-1">
                                <b-col sm="3">
                                    <label>Page:</label>
                                </b-col>
                                <b-col sm="9">
                                    <b-form-file
                                            maxWidth = "1920"
                                            accept = ".jpg, .png, .gif"
                                            @change="onImageChange"
                                            :state="Boolean(file)"
                                            placeholder="Choose a file..."
                                            drop-placeholder="Drop file here..."
                                    ></b-form-file>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                    <div v-if="!image"></div>
                    <div v-else  id="appContainer">
                        <div id="currentContainer" @change="accepPoint"></div>
                        <div class="imgPage"><img draggable="false" :src="image" /></div>
                        <b-row class="optionImg">
                            <b-col><b-button variant="outline-success" @click="removeImage">Add point</b-button></b-col>
                            <b-col><b-button variant="outline-success" @click="removeImage">Save image</b-button></b-col>
                            <b-col><b-button variant="outline-success" @click="removeImage">Remove image</b-button></b-col>
                        </b-row>
                    </div>
                </div>
                <button @click="addSlide">Add page</button>
            </b-tab>
            <b-tab v-for="page of pages" :key="page" title="Mobile"></b-tab>
            <b-tab title="+"  @click="addPage"> No thing </b-tab>
         </b-tabs>
       </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        file: null,
        isSelected: false,
        currentLeft: Number,
        currentTop: Number,
        image: '',
        slides: [
          {
            file: null,
          }
        ],
        pages: [
          {
            file: null,
          }
        ],
        points: [
            {
                file: null,
            }
        ]
      };
    },
    methods: {
        accepPoint() {
             appContainer.bind('onmousedown', event => {
                currentLeft = event.offsetX;
                currentTop = event.offsetY;
                currentContainer.css('left', currentLeft + 'px');
                currentContainer.css('top', currentTop + 'px');
            });

             appContainer.bind('onmousemove', event => {
                let width = event.offsetX - currentLeft;
                let height = event.offsetY - currentTop;
                if (width < 0) {
                    width = 0;
                }
                if (height < 0) {
                    height = 0;
                }
                currentContainer.css('width', width + 'px');
                currentContainer.css('height', height + 'px');
            });

            appContainer.bind('onmouseup', () => {   
                isSelected = false;
                currentContainer.css('width', 0);
                currentContainer.css('height', 0);
            });
        },

        addSlide() {
            this.slides.push({
                file: null,
            });
        },

        addPage() {
            this.pages.push({
                file: null,
            });
        },
        onImageChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },

        createPoint(file) {
            var point = new DemoPoints();
        },

        addPoint: function (e) {
             this.points.push({
                file: null,
            });
        }, 
        removeImage: function (e) {
            this.image = '';
        },
    },
  }
</script>
<style scoped lang="scss">
  @import "~assets/styles/mixins";
  @import "~assets/styles/variables";
  
    .right-content {
        float: left;
        width: 84%;
        .topNav {
            height: 50px;
            width: 100%; 
            border: 1px solid rgba(0,0,0,.0625);
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

        .ContentPage {
        width: 100%;
        height: 650px;
            .tabs {
                display: block;
                #appContainer {
                    margin: 2% 10%;
                    height: 500px;
                    position: relative;
                    display: inline-block;
                    #currentContainer {
                        position: absolute;
                        top: 120px;
                        left: 120px;
                        width: 120px;
                        height: 120px;
                        background: rgba(255, 0, 0, .5);
                    }
                    .imgPage {
                        padding: 2%;
                        width: 98%;
                        height: 90%;
                        float: left;
                        border: 1px solid cadetblue;
                        border-radius: 20px;
                        margin-bottom: 20px;
                    }
                    .optionImg {
                        margin: 0%;
                        width: 100%;
                        height: 10%;
                        border-bottom-left-radius: 20px;
                        border-bottom-right-radius: 20px;
                    }
                }
                .imagePageMobile {
                    margin: 2% 30%;
                    height: 500px;
                    img {
                        padding: 2%;
                        width: 98%;
                        height: 90%;
                        float: left;
                        border: 1px solid cadetblue;
                        border-radius: 20px;
                        margin-bottom: 20px;
                    }
                    .optionImg {
                        margin: 0%;
                        width: 100%;
                        height: 10%;
                        border-bottom-left-radius: 20px;
                        border-bottom-right-radius: 20px;
                    }
                }
            }
        }
    }
 
</style>
