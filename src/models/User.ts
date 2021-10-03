import {Document, Model, model, Schema} from 'mongoose';

const modelName = 'User';

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
});

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}


interface UserDocument extends User, Document {

}

export interface UserModel extends Model<UserDocument> {

}

export default model<UserDocument, UserModel>(modelName, UserSchema);