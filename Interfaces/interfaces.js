//interfaces
//if we know only declarations (method names) but we dont know function implementation then
//we will choose interfaces
;
var obj = {
    data: "hello",
    getData: function () {
        return obj.data;
    }
};
console.log(obj.data, obj.getData());
