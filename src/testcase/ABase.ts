module testcase {
	export abstract class ABase implements IBase {

		private $name:string;
		public id:number;
		public constructor() {
			console.log("ABase constructor!");
			this.baseFunction("AAA");
			this.fatherFunction("AAA");
		}

		abstract baseFunction(str:string):void;

		fatherFunction(str:string):void{
			console.log("ABase fatherFunction execute!"+str);
		}

		helloWorld(str:string):number{
			return 12;
		}

		public get name():string{
			console.log("ABase name!");
			return this.$name;
		}
	}
}