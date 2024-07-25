import mongoose, { Schema, Document } from "mongoose";

export interface CmsSiginModel extends Document {
    createDate: Date;
    userName: string;
    password: String;
    email: String;
}

const CmsSiginSchema: Schema = new Schema(
    {
        createDate: {type: Date, default: new Date()},
        userName: {type: String},
        email: { type: String, required: true },
        password: {type: String, required: true }
    }
)

const Privacy = mongoose.model<CmsSiginModel>('CmsSigin', CmsSiginSchema);
export default Privacy;
