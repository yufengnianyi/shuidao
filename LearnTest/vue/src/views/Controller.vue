<template>
  <el-row>
    <span>
      <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
      <el-button plain @click="open1" style="margin-left: 8px">设置田间设备</el-button>
    </span>
    <el-divider></el-divider>
    <div style="width: 500px">
      <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList">
        <el-button size="small" type="primary">获取当日的数据</el-button>
        <div slot="tip" class="el-upload__tip">当日数据截至晚上7：00</div>
      </el-upload>
    </div>
    <el-divider></el-divider>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2022/7/1" placement="top">
          <el-card>
            <h4>获取 2022/7/1 的数据</h4>
            <p>admin 获取于 2022/7/1 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022/7/1" placement="top">
          <el-card>
            <h4>获取 2022/7/1 的数据</h4>
            <p>admin 获取于 2022/7/1 5:26</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022/6/29" placement="top">
          <el-card>
            <h4>获取 2022/6/29 的数据</h4>
            <p>admin 提交于 2022/6/29 12.56</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022/6/28" placement="top">
          <el-card>
            <h4>获取 2022/6/28 的数据</h4>
            <p>admin 提交于 2022/6/28 6:41</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022/6/27" placement="top">
          <el-card>
            <h4>获取 2022/6/27 的数据</h4>
            <p>admin 提交于 2022/6/27 9:21</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022/6/27" placement="top">
          <el-card>
            <h4>获取 2022/6/27 的数据</h4>
            <p>admin 提交于 2022/6/27 22:41</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </el-row>
</template>

<script>
export default {
  name: "Controller",
  data() {
    return {
      value:[],
      options: [{
        value: 'IMX219',
        label: 'IMX219摄像头',
        children: [{
              value: '30',
              label: '30度'
            }, {
              value: '45',
              label: '45度'
            }, {
              value: '60',
              label: '60度'
            }, {
              value: '90',
              label: '90度'
            }],
        }, {
        value:'123',
        label:'IMX218摄像头',
        children: [{
          value: '30',
          label: '30度'
        }, {
          value: '45',
          label: '45度'
        }, {
          value: '60',
          label: '60度'
        }, {
          value: '90',
          label: '90度'
        }]}],
      fileList: [{name: '20220701', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: '20220630', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        {name:'20220629',url: ''}]
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    open1() {
      this.$notify({
        title: '成功',
        message: '成功对设备设置更改',
        type: 'success'
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    }
  }
}
</script>

<style scoped>

</style>