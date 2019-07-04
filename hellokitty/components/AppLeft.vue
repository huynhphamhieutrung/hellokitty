<template>
 <div class="left-content">
     <div class="sideProfile">
        <div id="Topicon"><img src="../static/iconOffy.png"> </div>
        <div class="nameIcon">
                <span>Indemo</span>
                <strong></strong>
        </div>
    </div>

    <ul class="sideMenu">
        <li class="Dashboard">
            <a href="./" target="_blank">
				<span><img src="../static/home.png" /></span>
                <span>Dashboard</span>
			</a>
        </li>

         <li class="Control" >
             <a href="./controllist" target="_blank">
				<img src="../static/home.png" />
				<span>ControlList</span>
			</a>
        </li>

        <li class="Account" >
             <a href="./account" target="_blank">
				<img src="../static/home.png" />
				<span>Account</span>
			</a>
        </li>
    </ul>
</div>


</template>

<script>
export default {
    name: 'AppLeft'  
}
</script>
<style scoped lang="scss">
  @import "~assets/styles/mixins";
  @import "~assets/styles/variables";

.left-content {
    float: left;
    width: 16%; 
    min-height: 800px;
    .sideProfile {
        width: 100%;
        height: 80px;
        text-decoration: none;
        border: 1px solid rgba(0,0,0,.0625);
        #Topicon {
            padding: 3%;
            width: 50%;
            height: 100%;
            float: left;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .nameIcon{
            width: 50%;
            height: 100%;
            float: left;
            padding: 25px 2px;
            span {
                font-size: 15px;
                font-weight: 600;
                color: #B8860B;
            }
        }   
    }

    .sideMenu {
        padding: 30% 10%;
        width: 100%;
        min-height: 800px;
        float: left;
        border-right: 1px solid rgba(0,0,0,.0625);
        list-style-type: none;
        position: relative;
        .Dashboard, .Account, .Control{
            padding: 5% 10%;
            width: 100%;
            height: 100px;
            a span {
                font-size: 15px;
                font-weight: 500;
                color: #B8860B;
            }
        }
    }
}

</style>
