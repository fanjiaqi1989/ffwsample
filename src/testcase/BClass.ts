module testcase {
	export class BClass extends ABase {
		public constructor() {
			super();
		}

		baseFunction(str:string):void{
			console.log("BBB console"+str);
		}

		fatherFunction(str:string):void{
			super.fatherFunction(str);
			console.log("BClass fatherFunction execute!"+str);
		}
	}
}