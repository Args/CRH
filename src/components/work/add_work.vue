<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <el-col :span="24" class="breadcrumb-container">
      <div class="title">作业管理 / 添加作业计划</div>
    </el-col>

    <el-col class="well well-lg" style="background-color: white">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <div class="col-sm-12">
          <div class="col-sm-4">
            <el-form-item label="作业日期：">
              <el-date-picker
                      v-model="form.date_value"
                      type="date"
                      placeholder="请选择日期"
                      style="width: 222px">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="作业时间："  >
              <el-time-picker
                      v-model="form.time_value"
                      placeholder="请选择时间"
                      style="width: 222px">
              </el-time-picker>
            </el-form-item>
          </div>
          <div class="col-sm-4">
            <el-form-item label="股道：">
              <el-select v-model="form.guDao" placeholder="选择股道" style="width: 222px">
                <el-option label="股道一" value="1"></el-option>
                <el-option label="股道二" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item  label="车次：" >
              <el-input v-model="form.trainNum" style="width: 222px"></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="col-sm-4">
            <el-form-item label="车列号：">
              <el-autocomplete
                      v-model="form.trainLineNum"
                      :fetch-suggestions="querySearchAsync"
                      placeholder="搜索车列号"
                      icon="search"
                      @select="handleSelect"
                      style="width: 222px; margin-left: 15px"
              ></el-autocomplete>
            </el-form-item>
            <el-form-item label="车组类型：">
              <el-form-item>
                <el-input v-model="form.trainGroup" style="width: 222px" :disabled="true"></el-input>
              </el-form-item>
            </el-form-item>
          </div>
          <div class="col-sm-4">
            <el-form-item label="车型：">
              <el-form-item >
                <el-input v-model="form.trainName" style="width: 222px" :disabled="true"></el-input>
              </el-form-item>
            </el-form-item>
            <el-form-item  label="修程：" >
              <el-select v-model="form.xiuChen" placeholder="选择修程" style="width: 222px">
                <el-option label="修程一" value="1"></el-option>
                <el-option label="修程二" value="2"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="col-sm-10">
            <el-form-item  label="作业组别：" >
              <el-select v-model="form.workGroup" placeholder="选择组别" style="width: 222px">
                <el-option label="组别一" value="1"></el-option>
                <el-option label="组别二" value="2"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="col-sm-4">
            <el-form-item  label="作业内容：">
              <div class="panel panel-default"  style="margin-top: 10px; background-color: #F9FAFC; width: 222px;overflow-y:scroll; ">
                <ul style="margin-left: 0px;padding-left: 0px; height: 300px" >
                  <li v-for="(item,index) in workContent" style="list-style-type:none; margin-left: 10px">
                    <el-checkbox  v-if="item.subs.length == 0" @change="parentCheck(item)">{{item.name}}</el-checkbox>
                    <div v-else>
                      <span class="glyphicon glyphicon-plus" style="margin-left: 3px; color: #20A0FF" @click="showChildren(index)"></span>
                      <strong style="margin-left: 2px" >{{item.name}}</strong>
                      <ul v-show="1">
                        <li v-for="subItem in item.subs" style="list-style-type:none;">
                          <el-checkbox style="font-weight: normal" @change="childCheck(item, subItem)">{{subItem.name}}</el-checkbox>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </el-form-item>
          </div>
          <div class="col-sm-3">
            <el-form-item  label="已选：">
              <div class="panel panel-default"  style="margin-top: 10px; background-color: #F9FAFC; width: 222px;overflow-y:scroll; "
                   v-if="form.choosedContent.length > 0">
                <ul style="margin-left: 0px;padding-left: 0px; height: 300px" >
                  <li v-for="(item,index) in form.choosedContent" style="list-style-type:none; margin-left: 10px">
                    <div v-if="item.subs.length == 0"><strong style="margin-left: 2px">{{item.name}}</strong></div>
                    <div v-else>
                      <span style="margin-left: 3px; color: #20A0FF" @click="showChildren(index)"></span>
                      <strong style="margin-left: 2px">{{item.name}}</strong>
                      <ul v-show="1">
                        <li v-for="(subItem,index) in item.subs" style="list-style-type:none;">
                          <div style="font-weight: normal">{{subItem.name}}</div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div v-else style="color: #FF4949">暂无作业内容~</div>
            </el-form-item>
          </div>
        </div>

      </el-form>
    </el-col>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name:"add_work",
    components: {},
    data () {
      return {
        form: {
          user: '',
          region: '',
          date_value: Date.now(),
          time_value: "",
          guDao: "",
          trainNum:'2',
          trainLineNum: "",
          trainName: "",
          trainGroup: "",
          xiuChen: "",
          workGroup: "",
          choosedContent:[]
        },
        trainLineNumbers: [],
        workContent:[{"id": 1, "name":"外皮清洗", "subs": [{"id": 101, "name":"车门清洗","subs":[]},{"id": 102, "name":"车窗清洗","subs":[]}]},
          {"id": 2, "name":"吸污", "subs":[]},
          {"id": 3, "name":"车顶清洗", "subs": []},
          {"id": 4, "name":"污箱清洗", "subs": [{"id": 103, "name":"污箱盖清洗","subs":[]},{"id": 104, "name":"污箱体清洗","subs":[]}]},
          {"id": 5, "name":"构架清洗", "subs":[]},
          {"id": 6, "name":"吸污", "subs":[]},
          {"id": 7, "name":"车顶清洗", "subs":[]},
          {"id": 8, "name":"污箱清洗", "subs": [{"id": 103, "name":"污箱盖清洗","subs":[]},{"id": 104, "name":"污箱体清洗","subs":[]}]},
          {"id": 9, "name":"构架清洗", "subs":[]},
        ]
      }
    },
    methods: {
      loadAll() {
        return [
          { "id": "1", "train_style": "车型一", "train_group": "车组一", "value": "车列号一"},
          { "id": "2", "train_style": "车型二", "train_group": "车组二", "value": "车列号二"},
          { "id": "3", "train_style": "车型三", "train_group": "车组三", "value": "车列号三"},
        ];
      },
      querySearchAsync(queryString, cb) {
        var trainLineNumbers = this.trainLineNumbers;
        var results = queryString ? trainLineNumbers.filter(this.createStateFilter(queryString)) : trainLineNumbers;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 1000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
//        console.log(item);
        this.form.trainName = item.train_style;
        this.form.trainGroup = item.train_group;
      },
      showChildren(index) {

      },
      parentCheck(item) {
        var exist = false
        for(let i=0; i< this.form.choosedContent.length; i++) {
            if(this.form.choosedContent[i].id == item.id) {
                this.form.choosedContent.splice(i, 1);
                exist = true;
                break;
            }
        }
        if( !exist) {
            this.form.choosedContent.push(item)
        }
      },
      childCheck(item,subItem) {
          var parentExist = false
          for(let i=0; i< this.form.choosedContent.length; i++) {
              if(this.form.choosedContent[i].id == item.id) {
                  parentExist = true
                  var subExist = false;
                  for(let j=0; j<this.form.choosedContent[i].subs.length; j++) {
                      if(this.form.choosedContent[i].subs[j].id == subItem.id) {
                          this.form.choosedContent[i].subs.splice(j, 1)
                          subExist = true;
                          break;
                      }
                  }
                  if(!subExist) {
                      this.form.choosedContent[i].subs.push(subItem);
                  }
                  if(this.form.choosedContent[i].subs.length == 0) {
                      this.form.choosedContent.splice(i, 1)
                  }
              }
          }
          if(!parentExist){
              this.form.choosedContent.push({"id":item.id, "name":item.name,"subs":[subItem]})
          }
      }
    },
    computed: {

    },
    created: function () {

    },
    mounted: function () {
      this.trainLineNumbers = this.loadAll();
    },
  }

</script>
<style>
  .breadcrumb-container {
    padding: 15px;
    background-color: #E5E9F2;
  }
  .title {
    width: 200px;
    float: left;
    color: #475669;
    font-weight: bold;
  }
</style>
