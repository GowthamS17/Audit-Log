<template>
    <el-card class="box-card">
    <h1>Leads - Mass Delete</h1>
  </el-card>
<el-card>
    <b>Criteria</b>
    <br /><br/>


    <div>
    <el-select v-model="value1" class="m-1" placeholder="Select" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-select v-model="value2" class="m-1" placeholder="Select" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-input style="width:500px" v-model="value7"></el-input>
  <el-icon style="width:50px"><Remove /></el-icon>
  </div>
  <br/>
  <el-button @click="changePlaceholder()" type="primary">{{ placeholder }}</el-button>
  <br />



  <div style="margin-top: 1%;">
  <el-select v-model="value3" class="m-1" placeholder="Select" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-select v-model="value4" class="m-1" placeholder="Select" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-input style="width:500px" v-model="value8"></el-input>
  <el-icon style="width:50px"><Remove /></el-icon>
</div><br />
<el-button @click="changePlaceholder" type="primary">OR</el-button>
<br />


<div style="margin-top: 1%;">
  <el-select v-model="value5" class="m-1" placeholder="Select" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-select v-model="value6" class="m-1" placeholder="Select" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-input style="width:500px" v-model="value9"></el-input>
  <el-icon style="width:50px"><Remove /></el-icon>
  <el-icon style="width:50px"><CirclePlus /></el-icon>
</div>
<el-button @click="openDelete= !openDelete" 
style ="margin-top:3%; margin-left:63%;" type="primary" >Search</el-button> 
</el-card>
<el-card class="box-card" v-if ="openDelete">
    <el-button type="success" style="margin-left: 1%" >Clear</el-button>
    <el-button type="danger" style="margin-left: 5%" 
      >Mass Delete</el-button
    >
  </el-card>
<el-card class="box-card1" v-if ="openDelete">
    <el-table
      ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="auto" />
      <el-table-column property="id" label="ID" width="auto" />
      <el-table-column property="name" label="Name" width="auto" />
      <el-table-column property="email" label="Email" width="auto" />
      <el-table-column property="phone" label="Phone no" width="auto" />
      <el-table-column property="address" label="Address" width="auto" />
      
    </el-table>
  </el-card>

</template>
<script lang="ts" >
import {ref, reactive } from 'vue'
import { ElTable } from "element-plus";
export default{
    name:"UpdatePage",
    data(){
        return{
            openDelete:false
        }
    },
    setup() {
        const value1 = ref('')
        const value2 = ref('')
        const value3 = ref('')
        const value4 = ref('')
        const value5 = ref('')
        const value6 = ref('')
        const value7 = ref('')
        const value8 = ref('')
        const value9 = ref('')
        // const openDelete = ref(false);
    const state = reactive({
      placeholder: 'AND',
    })

    const changePlaceholder = () => {
      state.placeholder = 'OR'
    }
    interface User {
  id: Number;
  name: string;
  email: String;
  phone: String;
  address: string;
}

const multipleTableRef = ref<InstanceType<typeof ElTable>>();
const multipleSelection = ref<User[]>([]);
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      // TODO: improvement typing when refactor table
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      multipleTableRef.value!.toggleRowSelection(row, undefined);
    });
  } else {
    multipleTableRef.value!.clearSelection();
  }
};
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val;
};
    const tableData = ref([
  {
    id: 1,
    name: "Gowtham",
    email: "gowtham@gmail.com",
    phone: "9655539399",
    address: "coimbatore",
  },
  {
    id: 2,
    name: "Gopinath",
    email: "gopi@gmail.com",
    phone: "8965471239",
    address: "chennai",
  },
  {
    id: 3,
    name: "Naveen",
    email: "naveen@gmail.com",
    phone: "8965854129",
    address: "Namakkal",
  },
  {
    id: 4,
    name: "Varun",
    email: "varun@gmail.com",
    phone: "9445522367",
    address: "Tiruppur",
  },
  {
    id: 5,
    name: "Kathir",
    email: "kathir@gmail.com",
    phone: "9658741239",
    address: "Tiruchy",
  },
  {
    id: 6,
    name: "Madhan",
    email: "madhan@gmail.com",
    phone: "7010805107",
    address: "Ooty",
  },
  {
    id: 7,
    name: "Vasanth",
    email: "vasanth@gmail.com",
    phone: "9442234399",
    address: "Vellore",
  },
  {
    id: 8,
    name: "Senthil",
    email: "senthil@gmail.com",
    phone: "9842205768",
    address: "Madurai",
  },
  {
    id: 9,
    name: "Kaviya",
    email: "kaviya@gmail.com",
    phone: "9655539399",
    address: "Tuticorin",
  },
  {
    id: 10,
    name: "Praveen",
    email: "praveen@gmail.com",
    phone: "8965854129",
    address: "Erode",
  },
]);
const options = [
  {
    value: 'Id',
    label: 'ID',
  },
  {
    value: 'Name',
    label: 'Name',
  },
  {
    value: 'Email',
    label: 'Email',
  },
  {
    value: 'Phone',
    label: 'Phone',
  },
  {
    value: 'Address',
    label: 'Address',
  },
]
    return {
      placeholder: state.placeholder,
      changePlaceholder,
      tableData,handleSelectionChange,value1,options,value2,value3,value4,value5,value6,value7,value8,value9,
    //   openDelete
    }
  },
}
</script>
<style scoped>
.m-1{
 margin-left:2%;
 margin-right:2%;
}
</style>