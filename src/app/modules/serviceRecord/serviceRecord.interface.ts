export type TServiceRecord = {
  serviceDate: Date;
  completionDate?: Date | null;
  description: string;
  status?: "pending" | "in_progress" | "done";
  bikeId: string;
};
