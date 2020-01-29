import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
  title:        String,
  description:  String,
  subjectCode:  String,
  subjectName:  String,
  numberLab :   Number,
  semester:     String,
  docent:       String,
  publishDate:  Date,
  deliveryDate: Date,
  workingTime:  Number,
  bodyPath:     String,
  codePath:     String,
  imagePath:    String
});

interface IGuide extends Document {
  title:        string;
  description:  string;
  subjectCode:  string;
  subjectName:  string;
  numberLab :   number;
  semester:     string;
  docent:       string;
  publishDate:  Date;
  deliveryDate: Date;
  workingTime:  number;
  bodyPath:     string;
  codePath:     string;
  imagePath:    string;
}

export default model<IGuide>('Guide', schema);