import { Document, Schema, model} from "mongoose";
import { userSchema} from './User.model';

 interface ISubject extends Document {
    name: string;
    code : string;
    areaId : number;
    userId : number;

}
export const subjectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    code:{
        type:String,
    },
    areaId:{
        type: Schema.Types.ObjectId, ref: 'Area'
    },
    userId:{
        type: Schema.Types.ObjectId, ref: 'User'
    }
});

export default model<ISubject>('Subject', subjectSchema);
