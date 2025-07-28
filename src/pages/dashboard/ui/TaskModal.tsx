import { useModal } from "@/shared/context";
import CustomModal from "@/shared/ui/CustomModal";
import Task from "@/shared/ui/Task";

export default function TaskModal() {
  const { project } = useModal();
  return (
    <CustomModal>
      <Task project={project} />
    </CustomModal>
  );
}
