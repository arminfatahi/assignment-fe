export const getStatusColor = (status: string) => {
  switch (status) {
    case "On Track":
      return "warning";
    case "In Progress":
      return "warning";
    case "To Do":
      return "info";
    case "At Risk":
      return "error";
    default:
      return "success";
  }
};
