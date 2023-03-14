<template>
  <el-card class="box-card">
    <el-button type="success" style="margin-left: 5%" @click ="$router.push('/update')">Mass Update</el-button>
    <el-button type="danger" style="margin-left: 5%" @click="$router.push('/delete')"
      >Mass Delete</el-button
    >
    <el-button type="primary" style="margin-left: 53%" @click="$router.push('/history')">History</el-button>
  </el-card>
  <el-card class="box-card1">
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
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index)"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click.prevent="handleDelete(scope.$index)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
      
    </el-table>
  </el-card>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref } from "vue";
import { ElTable } from "element-plus";
interface User {
  id: Number;
  name: string;
  email: String;
  phone: String;
  address: string;
}
const router=useRouter()
const handleEdit = (index: number) => {
  // console.log(index, row);
  router.push('/edit')
};
const handleDelete = (index: number) => {
  tableData.value.splice(index, 1);
  console.log(`${index + 1} is deleted`);
};
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
</script>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 5%;
}
.box-card1 {
  margin-left: 15%;
  margin-right: 15%;
}
</style>
