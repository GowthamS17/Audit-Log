<template>
  <el-card class="card">
    <h3 style="text-align: center;">UPDATE</h3><br />

    <el-form :model="form" >

      <el-form-item label="ID" style="margin-left:10%">
        <el-input v-model="form.ID" style="width:400px;margin-left:7%"/>
      </el-form-item><br />

      <el-form-item label="Name" style="margin-left:10%">
        <el-input v-model="form.Name" style="width:400px;margin-left:3%"/>
      </el-form-item><br />

      <el-form-item label="Email" style="margin-left:10%">
        <el-input v-model="form.Email" style="width:400px;margin-left:3%"/>
      </el-form-item><br />

      <el-form-item label="Phone" style="margin-left:10%">
        <el-input v-model="form.Phone"  style="width:400px;margin-left:3%"/>
      </el-form-item><br />

      <el-form-item label="Address" style="margin-left:10%">
        <el-input v-model="form.Address" style="width:400px;margin-left:1%"/>
      </el-form-item>

    </el-form>
    <el-button type="success" style="margin-left:50%; margin-top: 7%;margin-bottom: 7%;">Submit</el-button>
  </el-card>
</template>
<script>
import { reactive } from "vue";
export default {
  name: "EditPage",
  setup() {
    const form = reactive({
      ID: "",
      Name: "",
      Email: "",
      Phone: "",
      Address: "",
    });
    return { form };
  },
};
</script>
<style scoped>
.card {
  margin-top: 5%;
  margin-left: 30%;
  margin-right: 30%;
  margin-bottom: 5%;
}
</style>
