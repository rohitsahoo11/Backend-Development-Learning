import mongooes from 'mongoose';

const medicalReportSchema = new mongooes.Schema({}, { timestamps: true });

export const MedicalReport = mongooes.model(
  'MedicalReport',
  medicalReportSchema
);
