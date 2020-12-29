//modules
//collection of modules called as project
//eg . login module,employee module,report module,analysis module

//we will create the modules in typescript
//we can export the modules

/*
export let sub_one:string="Angular";
export let sub_two:string="NodeJs";
export let sub_three:string="MongoDB";
*/

//default keyword is not applicable to variables

/*
export function oraDB():string{
    return "Oracle connection soon...";
};

export function mysqlDB():string{
    return "Mysql connection soon....!";
};

export default function mongoDB():string{
    return"mongoDB data soon.........!";
};
*/

export default class mean{
    private data:string;
    constructor(private arg1:string){
        this.data=arg1;
    };
public getData():void{

    console.log(this.data);
};

}