<template>
    <div class="myBg">
        <div class="bk-container">
            <div class="bk-head">
            </div> 
            <div class="bk-body">
            </div>
        </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.myBg{
    overflow:scroll;
    background-color: rgb(7, 47, 71) ;
    position:absolute;
    top: 0;
    right: 0;
    left: 0;
    min-height: 170vh;
    height: 170vh;
    width: 100vw;
    min-width: 100vw;
    background-size: cover;
    
@mixin dots($count) {
  $text-shadow: ();
  @for $i from 0 through $count {
    $text-shadow: $text-shadow,
                 (-.9 +(random()) * 3) + em
                 (-.9 +(random()) * 3) + em
                 1px
                 hsla(random() * 360, 100%, 50%,.9);
  }
  text-shadow: $text-shadow;
}

.bk-container {
  padding: 50%;
  font: 5vmin/1.3 Serif;
  overflow: hidden;
  background:transparent;
}

.bk-body {

  display: block;
  font-size: 52px;
  color: transparent;
  opacity: 1;
}

// .bk-head::before, .bk-head::after,
.bk-body::before, .bk-body::after {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 5em;
  height: 5em;
  content: '.';
  mix-blend-mode: screen;
  animation: 44s -27s move infinite ease-in-out alternate;
}


.bk-body::before {
  @include dots(20);
  animation-duration: 44s;
  animation-delay: -27s;
}

.bk-body::after {
  @include dots(20);
  animation-duration: 43s;
  animation-delay: -32s;
}

.bk-container::before {
  content: '';
  letter-spacing: .5em;
  text-shadow: 0 0 5px #000;
  white-space: pre;
  color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  color: #999;
}

.bk-container:first-line {
  font-size: 300%;
  font-style: italic;
  letter-spacing: 0;
  color: #fff;
}

@keyframes move {
  from {
    transform: rotate(0deg) scale(12) translateX(-20px);
  }
  to {
    transform: rotate(360deg) scale(18) translateX(20px);
  }
}


}
@media only screen and (max-width: 990px) {
    .myBg{
    min-height: 250vh;
    height: 250vh;
    }
}
</style>









