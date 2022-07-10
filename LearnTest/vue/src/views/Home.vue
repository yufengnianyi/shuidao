<template>
  <div>
    <h2 style="text-align: center">水稻病虫害</h2>
    <div>
      <el-carousel :interval="4000" type="card"  height="300px">
        <el-carousel-item v-for="item in imgList" :key="item.id" style="width: 600px; height: 300px">
          <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
    </div>
    <br>
    <div>
      <h2 style="text-align: center">防治建议</h2>
      <P style="text-indent:2em;">
        针对当前水稻病虫发生发展趋势，要坚持“统筹兼顾，压前控后”的策略，在推广应用种植香根草、人工释放赤眼蜂、安装害虫性诱或食诱装置、使用生物药剂等非化学防控措施的基础上，因地制宜制定化学防治方案，科学安排水稻病虫第二次防治总体战，减轻后期防控压力。
      </p>
      <P style="text-indent: 2em;">
        1.防治对象：主攻稻纵卷叶螟、稻飞虱、纹枯病，兼治螟虫、稻瘟病等
      </P>
      <P style="text-indent: 2em;">
        2.防治适期：大面积宜在8月15~16日，部分稻纵卷叶螟虫卵量高或纹枯病重发田块，可提前到8月12日左右用药。
      </P>
      <P style="text-indent: 2em;">
        3.药剂选择：防治稻纵卷叶螟宜在氯虫苯甲酰胺、氰虫·甲虫肼、四氯虫酰胺、甘蓝夜蛾核型多角体病毒中选择用药，其中氯虫苯甲酰胺、氰虫·甲虫肼可兼治螟虫；防治稻飞虱宜在三氟苯嘧啶、氟啶虫酰胺单剂或烯啶虫胺、呋虫胺复配剂中选择用药；防治纹枯病宜在嘧菌酯、噻呋酰胺、井冈霉素单剂或其复配剂中选择用药，兼治稻瘟病可选用嘧菌酯、井冈·三环唑、肟菌·戊唑醇等药剂。
      </P>
    </div>
  </div>

</template>

<script>

export default {
  components: {},
  data() {
    return {
      imgList: [
        {id:0,idView:require('@/image/1.jpg')},
        {id:1,idView:require('@/image/2.jpg')},
        {id:2,idView:require('@/image/3.jpg')},
        {id:3,idView:require('@/image/4.jpg')}
      ],

    };
  },
};
</script>
  <style >
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img{
    /*设置图片宽度和浏览器宽度一致*/
    width:100%;
    height:inherit;
  }

</style>