(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-559b931f"],{"33d5":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-card",[null!=t.api?o("a-form",[t._l(t.columns,(function(e,r){return["COLUMN_TEXT"==e.type?o("a-form-item",{attrs:{label:e.tip,"label-col":{span:7},"wrapper-col":{span:10}}},[o("a-input",{attrs:{placeholder:"请填写"+e.tip},model:{value:t.form[e.col],callback:function(o){t.$set(t.form,e.col,o)},expression:"form[column.col]"}})],1):t._e(),"COLUMN_TEXTAREA"==e.type?o("a-form-item",{attrs:{label:e.tip,"label-col":{span:7},"wrapper-col":{span:10}}},[o("a-textarea",{attrs:{placeholder:"请填写"+e.tip,rows:"20","allow-clear":""},model:{value:t.form[e.col],callback:function(o){t.$set(t.form,e.col,o)},expression:"form[column.col]"}})],1):t._e(),"COLUMN_PASSWORD"==e.type?o("a-form-item",{attrs:{label:e.tip,"label-col":{span:7},"wrapper-col":{span:10}}},[o("a-input-password",{attrs:{placeholder:"请填写"+e.tip},model:{value:t.form[e.col],callback:function(o){t.$set(t.form,e.col,o)},expression:"form[column.col]"}})],1):t._e(),"COLUMN_RADIO"==e.type?o("a-form-item",{attrs:{label:e.tip,"label-col":{span:7},"wrapper-col":{span:10}}},[o("a-radio-group",{on:{change:function(e){return t.$forceUpdate()}},model:{value:t.form[e.col],callback:function(o){t.$set(t.form,e.col,o)},expression:"form[column.col]"}},t._l(e.extra,(function(e,r){return o("a-radio",{key:r,attrs:{value:r}},[t._v(" "+t._s(e)+" ")])})),1)],1):t._e(),"COLUMN_SELECT"==e.type?o("a-form-item",{attrs:{label:e.tip,"label-col":{span:7},"wrapper-col":{span:10}}},[o("a-select",{model:{value:t.form[e.col],callback:function(o){t.$set(t.form,e.col,o)},expression:"form[column.col]"}},t._l(e.extra,(function(e,r){return o("a-select-option",{key:r,attrs:{value:r}},[t._v(" "+t._s(e)+" ")])})),1)],1):t._e(),"COLUMN_CHECKBOX"==e.type?o("a-form-item",{attrs:{label:e.tip,"label-col":{span:7},"wrapper-col":{span:10}}},[o("a-checkbox-group",{on:{change:function(e){return t.$forceUpdate()}},model:{value:t.form[e.col],callback:function(o){t.$set(t.form,e.col,o)},expression:"form[column.col]"}},t._l(e.extra,(function(e,r){return o("a-checkbox",{key:r,attrs:{value:r}},[t._v(" "+t._s(e)+" ")])})),1)],1):t._e(),"COLUMN_TIMESTAMP"==e.type?o("a-form-item",{attrs:{label:e.tip,"label-col":{span:7},"wrapper-col":{span:10}}},[o("a-date-picker",{attrs:{"show-time":"",format:"YYYY-MM-DD HH:mm:ss",placeholder:"请选择"+e.tip},on:{change:function(e){return t.$forceUpdate()}},model:{value:t.form[e.col],callback:function(o){t.$set(t.form,e.col,o)},expression:"form[column.col]"}})],1):t._e(),"COLUMN_RICHTEXT"==e.type?o("a-form-item",{attrs:{label:e.tip,"label-col":{span:7},"wrapper-col":{span:10}}},[o("wang-editor",{attrs:{id:t.form[e.col]},model:{value:t.form[e.col],callback:function(o){t.$set(t.form,e.col,o)},expression:"form[column.col]"}})],1):t._e(),"COLUMN_PICTURE"==e.type?o("a-form-item",{attrs:{label:e.tip,"label-col":{span:7},"wrapper-col":{span:10}}},[""!=t.form[e.col]?o("img",{staticStyle:{width:"200px"},attrs:{src:t.form[e.col]}}):t._e(),""!=t.form[e.col]?o("a-button",{attrs:{type:"danger"},on:{click:function(o){t.form[e.col]=""}}},[t._v("删除 ")]):t._e(),o("upload-button",{attrs:{accept:"image/*",multiple:!1},on:{uploadfinished:function(o){t.form[e.col]=o[0].response}}})],1):t._e(),"COLUMN_FILE"==e.type?o("a-form-item",{attrs:{label:e.tip,"label-col":{span:7},"wrapper-col":{span:10}}},[""!=t.form[e.col]?o("a-button",{attrs:{type:"primary"},on:{click:function(o){return t.openurl(t.form[e.col])}}},[t._v("下载 ")]):t._e(),""!=t.form[e.col]?o("a-button",{attrs:{type:"danger"},on:{click:function(o){t.form[e.col]=""}}},[t._v("删除 ")]):t._e(),o("upload-button",{attrs:{accept:"*/*",multiple:!1},on:{uploadfinished:function(o){t.form[e.col]=o[0].response}}})],1):t._e(),"COLUMN_PICTURES"==e.type?o("a-form-item",{attrs:{label:e.tip,"label-col":{span:7},"wrapper-col":{span:10}}},[t._l(t.form[e.col],(function(r,a){return o("div",{key:a},[o("img",{staticStyle:{width:"200px"},attrs:{src:r}}),o("a-button",{attrs:{type:"danger"},on:{click:function(o){t.form[e.col]=t.form[e.col].filter((function(t){return t!=r}))}}},[t._v(" 删除 ")])],1)})),o("upload-button",{attrs:{accept:"image/*",multiple:!0},on:{uploadfinished:function(o){t.form[e.col]=t.form[e.col].concat(o.map((function(t){return t.response})))}}})],2):t._e(),"COLUMN_FILES"==e.type?o("a-form-item",{attrs:{label:e.tip,"label-col":{span:7},"wrapper-col":{span:10}}},[t._l(t.form[e.col],(function(r,a){return o("div",{key:a},[o("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.openurl(r)}}},[t._v("下载")]),o("a-button",{attrs:{type:"danger"},on:{click:function(o){t.form[e.col]=t.form[e.col].filter((function(t){return t!=r}))}}},[t._v(" 删除 ")])],1)})),o("upload-button",{attrs:{accept:"*/*",multiple:!0},on:{uploadfinished:function(o){t.form[e.col]=t.form[e.col].concat(o.map((function(t){return t.response})))}}})],2):t._e(),"COLUMN_CHILDREN_CHOOSE"==e.type?o("a-form-item",{attrs:{label:e.tip,"label-col":{span:7},"wrapper-col":{span:10}}},[o("column-children-choose",{attrs:{tip:t.formTip[e.col],column:e,api:t.api},on:{"update:tip":function(o){return t.$set(t.formTip,e.col,o)}},model:{value:t.form[e.col],callback:function(o){t.$set(t.form,e.col,o)},expression:"form[column.col]"}})],1):t._e()]})),o("a-form-item",{staticStyle:{display:"flex","justify-content":"center"}},[o("a-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("创建")]),o("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:t.reset}},[t._v("重置")])],1)],2):t._e(),o("confirm-dialog",{ref:"confirmDialog"})],1)},a=[],n=o("1da1"),l=(o("96cf"),o("d81d"),o("2ca0"),o("caad"),o("2532"),o("ac1f"),o("1276"),o("8a79"),o("c1df")),c=o.n(l),s=o("3521"),i=o("129a"),p=o("ba8c"),u=o("31ce"),m=o("4160"),f={data:function(){return{columns:null,form:null,formTip:null,api:null}},components:{ConfirmDialog:i["a"],StandardTable:s["a"],WangEditor:p["a"],UploadButton:u["a"],ColumnChildrenChoose:m["a"]},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var o,r,a,n,l,s,i,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,o=t.$route.path.substring(0,t.$route.path.length-"/create".length),r="/api"+o+"/grid_config",e.next=5,t.$api(r).method("GET").call();case 5:if(a=e.sent,a.status){e.next=8;break}throw a.msg;case 8:n=a.grid.create,l=a.api,s={},i={},p=function(e){return t.$route.query[e]?t.$route.query[e]:""},n.columns.map((function(t){"COLUMN_CHECKBOX"===t.type||"COLUMN_PICTURES"===t.type||"COLUMN_FILES"===t.type?s[t.col]=""!==p(t.col)?JSON.parse(p(t.col)):[]:"COLUMN_TIMESTAMP"===t.type?s[t.col]=""!==p(t.col)?p(t.col):c()():s[t.col]=p(t.col),"COLUMN_CHILDREN_CHOOSE"===t.type&&(i[t.col]="")})),t.columns=n.columns,t.form=s,t.formTip=i,t.api=l,e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](0),t.$message.error("配置加载错误："+e.t0,5);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})))()},methods:{openurl:function(t){if(t.startsWith("http"))return window.open(t);var e=t,o="";t.includes("?")&&(e=t.split("?")[0],o=t.split("?")[1]),e.endsWith("/create")?(t="/create?path="+e.substring(0,e.length-"/create".length),""!=o&&(t+="&"+o)):e.endsWith("/edit")?(t="/edit?path="+e.substring(0,e.length-"/edit".length),""!=o&&(t+="&"+o)):e.endsWith("/list")&&(t="/list?path="+e.substring(0,e.length-"/list".length),""!=o&&(t+="&"+o)),this.$router.push(t)},reset:function(){for(var t in this.columns)"COLUMN_HIDDEN"===this.columns[t].type||("COLUMN_CHECKBOX"===this.columns[t].type||"COLUMN_PICTURES"===this.columns[t].type||"COLUMN_FILES"===this.columns[t].type?this.form[this.columns[t].col]=[]:"COLUMN_TIMESTAMP"===this.columns[t].type?this.form[this.columns[t].col]=c()():this.form[t]=""),"COLUMN_CHILDREN_CHOOSE"===this.columns[t].type&&(this.formTip[this.columns[t].col]="")},submit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var o,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r in o={},t.columns.map((function(e){"COLUMN_DISPLAY"!==e.type&&(o[e.col]=t.form[e.col])})),o)o[r]instanceof c.a&&(o[r]=o[r].format("YYYY-MM-DD hh:mm:ss")),o[r]instanceof Array&&(o[r]=JSON.stringify(o[r]));return e.prev=3,e.next=6,t.$api(t.api.create).method("POST").param(o).call();case 6:if(a=e.sent,!a.status){e.next=12;break}t.$message.success(a.msg,5),t.reset(),e.next=13;break;case 12:throw a.msg;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](3),t.$message.error(e.t0+"",5);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))()}}},d=f,h=(o("3f00"),o("2877")),_=Object(h["a"])(d,r,a,!1,null,"99f069f8",null);e["default"]=_.exports},"3f00":function(t,e,o){"use strict";o("9cd4")},"9cd4":function(t,e,o){}}]);