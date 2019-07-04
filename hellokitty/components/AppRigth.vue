<template>
<div class="right-content">
	<!-- This is nav -->
	<div class="topNav">
			 <b-navbar toggleable="lg" variant="success">
				<b-nav-form>
					<div class="nav toggle">
						<a id="menu_toggle"><i class="fa fa-bars"></i></a>
					</div>
				</b-nav-form>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" >Search</b-button>
                    </b-nav-form>
                    <b-nav-item href="./">Home</b-nav-item>
                    <b-nav-item href="#">Sign Out</b-nav-item>  
                </b-navbar-nav>
            </b-navbar>
	</div>
	<!-- This is content -->
	<div class="wrapper">
			<b-row>
				<b-col >
					<ul class="LG">
					<li><a href="./add" class="btn btn-primary" target="_blank">
						<span>Add</span>
					</a></li>

					<li><a v-on:click="show = !show" class="btn btn-primary" target="_blank">
						<span>Update</span>
					</a></li>
					
					<li><a class="btn btn-primary">
						<span>Delete</span>
					</a></li>	
					</ul>
				</b-col>
			</b-row>
	</div>
	<!-- this is list -->
	<div class="List">
		<b-container>
			<b-row class="SetImg">
				<b-col>
				    <div>	
					<b-card
						title="Card Title"
						img-src="https://picsum.photos/600/300/?image=25"
						img-alt="Image"
						img-top
						tag="article"
						style="max-width: 20rem;"
						class="mb-2"
					>	
						<b-card-text>
						Some quick example text to build on the card title and make up the bulk of the card's content.
						</b-card-text>
						<b-button class="btn btn-primary" @click="goToDemo(project.id, $event)">Go demo</b-button>
						<b-button  v-if="show" class="btn btn-primary" @click="goUpdate(project.id, $event)">Update</b-button>
					</b-card>
					</div>
				</b-col>
				<b-col>
				    <div>
					<b-card
						title="Card Title"
						img-src="https://picsum.photos/600/300/?image=25"
						img-alt="Image"
						img-top
						tag="article"
						style="max-width: 20rem;"
						class="mb-2"
					>
						<b-card-text>
						Some quick example text to build on the card title and make up the bulk of the card's content.
						</b-card-text>

						<b-button class="btn btn-primary" @click="goToDemo(project.id, $event)">Go demo</b-button>
						<b-button  v-if="show" class="btn btn-primary" @click="goUpdate(project.id, $event)">Update</b-button>
					</b-card>
					</div>
				</b-col>
				<b-col>
				    <div>
					<b-card
						title="Card Title"
						img-src="https://picsum.photos/600/300/?image=25"
						img-alt="Image"
						img-top
						tag="article"
						style="max-width: 20rem;"
						class="mb-2"
					>
						<b-card-text>
						Some quick example text to build on the card title and make up the bulk of the card's content.
						</b-card-text>

						<b-button class="btn btn-primary" @click="goToDemo(project.id, $event)">Go demo</b-button>
						<b-button  v-if="show" class="btn btn-primary" @click="goUpdate(project.id, $event)">Update</b-button>
					</b-card>
					</div>
				</b-col>
				<b-col>
				    <div>
					<b-card
						title="Card Title"
						img-src="https://picsum.photos/600/300/?image=25"
						img-alt="Image"
						img-top
						tag="article"
						style="max-width: 20rem;"
						class="mb-2"
					>
						<b-card-text>
						Some quick example text to build on the card title and make up the bulk of the card's content.
						</b-card-text>

						<b-button class="btn btn-primary" @click="goToDemo(project.id, $event)">Go demo</b-button>
						<b-button  v-if="show" class="btn btn-primary" @click="goUpdate(project.id, $event)">Update</b-button>
					</b-card>
					</div>
				</b-col>
			</b-row>
			<b-row class="SetImg">
				<b-col>
				    <b-img-lazy v-bind="mainProps" :src="getImageUrl(80)" alt="Image 1"></b-img-lazy>
					<h4>Update</h4>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
				</b-col>
				<b-col>
				    <b-img-lazy v-bind="mainProps" :src="getImageUrl(80)" alt="Image 1"></b-img-lazy>
					<h4>Update</h4>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
				</b-col>
				<b-col>
				    <b-img-lazy v-bind="mainProps" :src="getImageUrl(80)" alt="Image 1"></b-img-lazy>
					<h4>Update</h4>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
				</b-col>
				<b-col>
				    <b-img-lazy v-bind="mainProps" :src="getImageUrl(80)" alt="Image 1"></b-img-lazy>
					<h4>Update</h4>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</div>

   
</template>

<script>
export default {
	name: 'AppRight',

    data() {
      return {
		show: false,
        mainProps: {
			center: true,
			fluidGrow: true,
			blank: true,
			blankColor: '#bbb',
			width: 600,
			height: 400,
			class: 'my-5'
        }
      }
	},
	
    methods: {
      	getImageUrl(imageId) {
			const { width, height } = this.mainProps
			return `https://picsum.photos/${width}/${height}/?image=${imageId}`
		},

		goToDemo(slug, event) {
			event.preventDefault();

			this.$router.push(this.localePath({
			name: 'slug-demo',
			params: {slug}
			}));
		},

		goUpdate(){

		},
    }
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
			.toggle {
				font-size: 20px;
				color: rgba(0, 0, 0, 0.5);
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
			.LG {
				list-style-type: none;
				width: 100%;
				margin: 2% 30%;
				li {
					margin-left: 3%;
					text-align: center;
					float: left;			
					.btn {
						/* display: inline-block; */
						padding: 6px 12px;
						margin-bottom: 0;
						font-size: 14px;
						font-weight: 400;
						line-height: 1.42857143;
						text-align: center;
						white-space: nowrap;
						vertical-align: middle;
						-ms-touch-action: manipulation;
						touch-action: manipulation;
						cursor: pointer;
						-webkit-user-select: none;
						-moz-user-select: none;
						-ms-user-select: none;
						user-select: none;
						background-image: none;
						border: 1px solid transparent;
						border-radius: 4px;
					}

					.btn-primary {
						color: 	#B8860B;
						background-color: #fff;
						font-weight: bold;
					}

					.btn-primary:hover{
						background: none;
						border-color: #2e6da4;
						color: #000000;
					}
				}
			}
		}	
		.List{
			width: 100%;
			height: 100%;
			.btn {
						/* display: inline-block; */
						padding: 6px 12px;
						margin-bottom: 0;
						font-size: 14px;
						font-weight: 400;
						line-height: 1.42857143;
						text-align: center;
						white-space: nowrap;
						vertical-align: middle;
						-ms-touch-action: manipulation;
						touch-action: manipulation;
						cursor: pointer;
						-webkit-user-select: none;
						-moz-user-select: none;
						-ms-user-select: none;
						user-select: none;
						background-image: none;
						border: 1px solid transparent;
						border-radius: 4px;
						margin: 0% 5%;
					}

					.btn-primary {
						color: 	#fff;
						background-color: #B8860B;;
						font-weight: bold;
					}

					.btn-primary:hover{
						background: none;
						border-color: #2e6da4;
						color: #000000;
					}
		}
	}

</style>
