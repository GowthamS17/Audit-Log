<template>
  <el-aside>
    <el-card class="box-card1">
        <el-avatar :size="45" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
        <h3 style="margin-top:-15%; margin-left:25%">GOWTHAM (You)</h3>
        <el-container style="margin-top:20%">
            <div>
                Name: <span>Gowtham</span>
            </div>
            </el-container>
            <el-container style="margin-top:10%">
            <div>
                Email: <span>Gowtham@gmail.com</span>
            </div>
        </el-container>
        <el-container style="margin-top:10%">
            <div>
                Last login: <span>March 14, 6.00 AM</span>
            </div>
        </el-container>
        <el-container style="margin-top:10%">
            <div>
                <el-icon ><Menu /></el-icon><span>  Dash Board</span>
            </div>
        </el-container>
    </el-card>
  </el-aside>
  <el-main class="box-card2">
    <el-card style="height: 1000px; width: 1185px">
      <div>
        <h2>Audit Log</h2>
        <h3 style="margin-left: 95%; margin-top: -5%; color: Blue">help?</h3>
        <P
          >The audit log provides you with a chronological sequence of actions
          performed by the users in Zoho CRM.</P
        >
      </div>

      <el-container style="background-color: aliceblue; height: 3cm">
        <h4 style="margin-left: 2%">RECENT ACTIVITY</h4>
        <el-icon style="margin-left: 1%; margin-top: 2%"><Filter /></el-icon>
        <el-select
          v-model="value1"
          style="margin-top: 5%; margin-left: -15%"
          placeholder="All Entities"
          size="large"
        >
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select
          v-model="value2"
          style="margin-top: 5%; margin-left: 2%"
          placeholder="All Users"
          size="large"
        >
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select
          v-model="value3"
          style="margin-top: 5%; margin-left: 2%"
          placeholder="All Action"
          size="large"
        >
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select
          v-model="value4"
          style="margin-top: 5%; margin-left: 2%"
          placeholder="Any time"
          size="large"
        >
          <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-container>
      <el-container style="margin-top: 1%">
        <el-row
          ><h3><b>Today - Tuesday, March 14</b></h3></el-row
        >
      </el-container>

      <!-- <el-table
      :data="tableData"
      style="width: 100%"
      
    > -->

      <!-- Update One Contact -->

      <el-row>
        <p style="margin-left: 3%">6.00 PM</p>
        <p style="margin-left: 7%">Gowtham updated one lead</p>
        <el-popover placement="top" trigger="click" :width="fit - content">
          <el-container style="width: fit-content">
            <el-header style="background-color: aliceblue"
              ><h2>Gowtham updated person cargoez</h2></el-header
            >
            <el-main style="font-size: 20px"
              ><b style="font-size: 16px">Name:</b> cargo => cargoez</el-main
            >
            <el-main>March 14, 2023 6:00 PM - Gowtham</el-main>
          </el-container>
          <template #reference>
            <el-icon style="margin-left: 2%; margin-top: 1.5%"
              ><InfoFilled
            /></el-icon>
          </template>
        </el-popover>
      </el-row>

      <!-- Deleted one contact -->

      <div style="background-color: aliceblue">
        <el-row>
          <p style="margin-left: 3%">5.30 PM</p>
          <p style="margin-left: 7%">Gowtham deleted one lead</p>
          <el-popover placement="top" trigger="click" :width="fit - content">
            <el-container style="width: fit-content">
              <el-header style="background-color: aliceblue"
                ><h2>Gowtham deleted person Naveen</h2></el-header
              >
              <!-- <el-main style="font-size: 20px;"><b style="font-size: 16px;">Name:</b>  cargo => cargoez</el-main>
   <el-main style="font-size: 20px;"><b style="font-size: 16px;">Email:</b>  user@gmail.com => cargoez@gmail.com</el-main> -->
              <el-main> March 14, 2023 6:00 PM - Gowtham</el-main>
            </el-container>
            <template #reference>
              <el-icon style="margin-left: 2%; margin-top: 1.5%"
                ><InfoFilled
              /></el-icon>
            </template>
          </el-popover>
        </el-row>
      </div>

      <!-- Update Many -->

      <el-row>
        <p style="margin-left: 3%">4.00 PM</p>
        <p style="margin-left: 7%">Gowtham updated five contacts</p>
        <el-popover placement="right" trigger="click" :width="500">
          <el-container>
            <el-header style="background-color: aliceblue"
              ><h2>Gowtham updated five contacts</h2></el-header
            >
            <el-table :data="gridData">
              <el-table-column property="id" label="ID" />
              <el-table-column property="field" label="Field" />
              <el-table-column property="old" label="Old Value" />
              <el-table-column property="newValue" label="New Value" />
            </el-table>
            <el-main style="text-align: center"
              >March 14, 2023 6:00 PM - Gowtham</el-main
            >
          </el-container>
          <template #reference>
            <el-icon style="margin-left: 2%; margin-top: 1.5%"
              ><InfoFilled
            /></el-icon>
          </template>
        </el-popover>
      </el-row>

      <!-- Delete Many -->

      <div style="background-color: aliceblue">
        <el-row>
          <p style="margin-left: 3%">3.00 PM</p>
          <p style="margin-left: 7%">Gowtham deleted ten contacts</p>
          <el-popover placement="top" trigger="click" :width="fit - content">
            <el-container>
              <el-header style="background-color: aliceblue"
                ><h2>Gowtham deleted five contacts</h2></el-header
              >
              <el-table :data="gridData1">
                <el-table-column
                  style="margin-left: auto"
                  property="id"
                  label="ID"
                />
                <el-table-column property="name" label="Name" />
                <el-table-column property="location" label="Location" />
              </el-table>
              <el-main style="text-align: center"
                >March 14, 2023 6:00 PM - Gowtham</el-main
              >
            </el-container>
            <template #reference>
              <el-icon style="margin-left: 2%; margin-top: 1.5%"
                ><InfoFilled
              /></el-icon>
            </template>
          </el-popover>
        </el-row>
      </div>

      <div>
        <el-row>
          <p style="margin-left: 3%">2.00 PM</p>
          <p style="margin-left: 7%">
            Gowtham updated two fields in three contacts
          </p>
          <el-popover placement="right" trigger="click" :width="fit - content">
            <el-container>
              <el-header style="background-color: aliceblue"
                ><h2>Gowtham updated two fields in five contacts</h2></el-header
              >
              <el-table :data="gridData2">
                <el-table-column property="id" label="ID" />
                <el-table-column property="field1" label="Field1" />
                <el-table-column property="oldVal1" label="Old Value" />
                <el-table-column property="newVal1" label="New Value" />
                <el-table-column property="field2" label="Field2" />
                <el-table-column property="oldVal2" label="Old Value" />
                <el-table-column property="newVal2" label="New Value" />
              </el-table>
              <el-main style="text-align: center"
                >March 14, 2023 6:00 PM - Gowtham</el-main
              >
            </el-container>
            <template #reference>
              <el-icon style="margin-left: 2%; margin-top: 1.5%"
                ><InfoFilled
              /></el-icon>
            </template>
          </el-popover>
        </el-row>
      </div>

      <!-- one field update in many Document -->
      <div style="background-color: aliceblue">
        <el-row>
          <p style="margin-left: 3%">1.00 PM</p>
          <p style="margin-left: 7%">Gowtham updated five fields in Gowtham</p>

          <el-popover placement="top" trigger="click" :width="fit - content">
            <el-container style="width: fit-content">
              <el-header style="background-color: aliceblue"
                ><h2>Gowtham updated five fields in one contacts</h2></el-header
              >
              <el-table :data="gridData3">
                <el-table-column property="id" />
                <el-table-column property="oldVal" label="Old Value" />
                <el-table-column property="newVal" label="New Value" />
              </el-table>
              <el-main style="text-align: center;">March 14, 2023 6:00 PM - Gowtham</el-main>
            </el-container>
            <template #reference>
              <el-icon style="margin-left: 2%; margin-top: 1.5%"
                ><InfoFilled
              /></el-icon>
            </template>
          </el-popover>
        </el-row>
      </div>

      <!-- <el-table-column  width="100px"  >
        <template #default="scope" >
            <span @click="showPopover(scope.$row)">{{ scope.row.time }}</span>
        </template> -->
      <!-- {{ scope.row.value }} -->
      <!-- </el-table-column> -->
      <!-- </template> -->

      <!-- <el-table-column  width="1000px"  >
        <template #default="scope"  >
            <span @click="showPopover(scope.row)"  >{{ scope.row.content }}</span>
        </template> -->
      <!-- {{ scope.row.value }} -->
      <!-- </el-table-column> -->
      <!-- </template> -->

      <!-- </el-table> -->

      <el-container style="margin-top: 1%">
        <el-row
          ><h3><b>Yesterday - Monday, March 13</b></h3></el-row
        >
      </el-container>
      <div>
        <el-row>
          <p style="margin-left: 3%">6.00 PM</p>
          <p style="margin-left: 7%">Gowtham Added one lead</p>
          <el-popover placement="top" trigger="click" :width="fit - content">
            <el-container style="width: fit-content">
              <el-header style="background-color: aliceblue"
                ><h2>Gowtham Added person cargoez</h2></el-header
              >
              <el-main style="font-size: 20px"
                ><b style="font-size: 16px">Created ID:</b> 11</el-main
              >
              <el-main>March 14, 2023 6:00 PM - Gowtham</el-main>
            </el-container>
            <template #reference>
              <el-icon style="margin-left: 2%; margin-top: 1.5%"
                ><InfoFilled
              /></el-icon>
            </template>
          </el-popover>
        </el-row>
      </div> </el-card
  ></el-main>
</template>
<script>
import { ref } from "vue";
// import Popover from "./Popover.vue";
export default {
  name: "HistoryPage",
  setup() {
    const visible = ref(false);
    const showPopover = (index) => {
      alert(index);
    };
    const value1 = ref('')
    const value2= ref('')
    const value3= ref('')
    const value4= ref('')

const options4 = [
  {
    value: 'AllTime',
    label: 'All Time',
  },
  {
    value: 'Today',
    label: 'Today',
  },
  {
    value: 'Yesterday',
    label: 'Yesterday',
  },
  {
    value: '7days',
    label: 'Last 7 days',
  },
  {
    value: '30days',
    label: 'Last 30 days',
  },
  {
    value: 'specific',
    label: 'On a Specific Date',
  },
  {
    value: 'range',
    label: 'Date Range >',
  },
]


const options3 = [
  {
    value: 'AllAction',
    label: 'All Action',
  },
  {
    value: 'Added',
    label: 'Added',
  },
  {
    value: 'Updated',
    label: 'Updated',
  },
  {
    value: 'Deleted',
    label: 'Deleted',
  },
]

const options2 = [
  {
    value: 'User1',
    label: 'User1',
  },
  {
    value: 'User2',
    label: 'User2',
  },
  {
    value: 'User3',
    label: 'User3',
  },
  {
    value: 'User4',
    label: 'User4',
  },
  {
    value: 'allUser',
    label: 'All User',
  },
]
const options1 = [
  {
    value: 'Contacts',
    label: 'Contacts',
  },
  {
    value: 'Leads',
    label: 'Leads',
  },
  {
    value: 'Shipments',
    label: 'Shipments',
  },
  {
    value: 'Finance',
    label: 'Finance',
  },
  {
    value: 'All',
    label: 'All',
  },
]
    const gridData3 = [
      {
        id: "Name",
        oldVal: "Gowtham",
        newVal: "GM",
      },
      {
        id: "Email",
        oldVal: "gowtham@gmail.com",
        newVal: "GM@gmail.com",
      },
      {
        id: "Phone",
        oldVal: "9442234399",
        newVal: "9655539399",
      },
      {
        id: "Address",
        oldVal: "Tuticorin",
        newVal: "Chennai",
      },
    ];
    const gridData2 = [
      {
        id: "02",
        field1: "Name",
        oldVal1: "Gowtham",
        newVal1: "GM",
        field2: "Email",
        oldVal2: "gowtham@gmail.com",
        newVal2: "gm@gmail.com",
      },
      {
        id: "03",
        field1: "Name",
        oldVal1: "Gopinath",
        newVal1: "Gopi",
        field2: "Phone",
        oldVal2: "9655539399",
        newVal2: "9442234399",
      },
      {
        id: "05",
        field1: "Email",
        oldVal1: "naveen@gmail.com",
        newVal1: "nn@gmail.com",
        field2: "Address",
        oldVal2: "Namakkal",
        newVal2: "Chennai",
      },
      {
        id: "06",
        field1: "Email",
        oldVal1: "varun@gmail.com",
        newVal1: "vr@gmail.com",
        field2: "Name",
        oldVal2: "Varun",
        newVal2: "VarunRaj",
      },
      {
        id: "09",
        field1: "name",
        oldVal1: "Kumaran",
        newVal1: "KK",
        field2: "Address",
        oldVal2: "Salem",
        newVal2: "Chennai",
      },
    ];
    const gridData1 = [
      {
        id: "02",
        name: "Gowtham",
        location: "Contact",
      },
      {
        id: "04",
        name: "Gopinath",
        location: "Leads",
      },
      {
        id: "06",
        name: "Naveen",
        location: "Contact",
      },
      {
        id: "08",
        name: "Varun",
        location: "Leads",
      },
      {
        id: "10",
        name: "Kumaran",
        location: "Contact",
      },
    ];
    const gridData = [
      {
        id: "01",
        field: "email",
        old: "gowtham@gmail.com",
        newValue: "gm@gmail.com",
      },
      {
        id: "03",
        field: "email",
        old: "naveen@gmail.com",
        newValue: "nn@gmail.com",
      },
      {
        id: "05",
        field: "email",
        old: "gopinath@gmail.com",
        newValue: "gp@gmail.com",
      },
      {
        id: "07",
        field: "email",
        old: "varun@gmail.com",
        newValue: "vn@gmail.com",
      },
    ];
    return { showPopover, visible, gridData, gridData1, gridData2, gridData3,value1,options1,value2,options2,
    value3,options3,value4,options4
    };
  },
};
</script>
<style scoped>
.box-card1 {
  margin-top: 2%;
  height: 710px;
}
.box-card2 {
  margin-left: 19.5%;
  margin-top: -731px;
}
</style>
