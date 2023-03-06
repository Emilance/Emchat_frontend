<script>

export default{

 props :{
       username : String,
       lastMessage : String  ,
       picsurl :String,
       missedMessage : Number,
       time: String
       }
 
}

</script>

<template>
   <div class="friend">
       <div class="fimgcon">
        <img :src="picsurl" />
       </div>
       <div class="ftestCon">
            <h5>
                {{ username }}
            </h5>
            <p>
                {{ lastMessage }}
            </p>
        </div>
        <div class="fleftcon">
            <h6>{{ time }}</h6>
            <div class="missed">
                <p>{{ missedMessage }}</p>

            </div>

        </div>
   </div>

</template>

<style>
  .friend{
    height: 12vh;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem;
    border-top: 1px solid rgb(133, 129, 129);
    border-bottom: 1px solid rgb(133, 129, 129);
    cursor: pointer;
    transition: 0.5s ease;
  }

  .friend:hover{
    transform: scale(1.02);
  }

  .ftestCon{
         color:white;
         margin:0 1rem;
         flex: 1;
    }
    .ftestCon >h5 {
        font-size: 0.8rem;
        font-weight: 500;
    }
    .ftestCon >p {
        font-size: 0.5rem;
        font-weight: 100;

    }
  .fimgcon{
    height: 2.5rem;
    width: 2.5rem;
  }
  .fimgcon > img {
    width:100%;
    height: 100%;
    border-radius: 50%;
  }
  .fleftcon{
    width:30%;
    height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .fleftcon>h6{
    font-size: 0.7rem;
  }

.fleftcon > .missed {
    background-color: purple;
    width: 1rem;
     height: 1rem;
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 50%;
}
.missed>p{
    font-size: 0.6rem;
  

  }
</style>