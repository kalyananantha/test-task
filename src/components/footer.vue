<template>
    <div class="mainFooter">
        <div class="footer">
            <a href ="https://github.com/topics/main-page"><img src="../assets/Vector.svg" /></a>
            <div>© All rights reserved, 2022</div>
        </div>
    </div>
</template>
  
<script>
import { createFooter } from 'webpack/lib/ModuleFilenameHelpers';

    export default {
        name: 'Footer',
    }
</script>

<style>
.mainFooter {
position: absolute;
width: 100%;
height: 120px;
left: 0px;
background: #24292F;
box-shadow: 0px -12px 36px rgba(0, 0, 0, 0.25);
}
.footer {
    text-align: center;
    margin-top: 2em;
}
.footer img {
    cursor: pointer;
}
.footer div {
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
color: #FFFFFF;
}
</style>