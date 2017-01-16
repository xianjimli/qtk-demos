export class MainModel extends Array<any> {
	public constructor() {
		super();
		this.push({text:"Show Toast", cmd:"showDialog", cmdArgs:"toast"});	
		this.push({text:"Show Message", cmd:"showDialog", cmdArgs:"message"});	
		this.push({text:"Show Confirm", cmd:"showDialog", cmdArgs:"confirm"});	
		this.push({text:"Show Progress", cmd:"showDialog", cmdArgs:"progress"});	
		this.push({text:"Show Input", cmd:"showDialog", cmdArgs:"input"});	
		this.push({text:"Show Property", cmd:"showDialog", cmdArgs:"property"});	
		this.push({text:"Show Single Choice", cmd:"showDialog", cmdArgs:"single-choice"});	
		this.push({text:"Show Multi Choice", cmd:"showDialog", cmdArgs:"multi-choice"});	
	}

	public static create() : MainModel {
		return new MainModel();
	}
};
