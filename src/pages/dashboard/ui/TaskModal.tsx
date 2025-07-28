import { useModal } from "@/shared/context";
import { CustomModal, TaskCard } from "@/shared/ui";

export default function TaskModal() {
  const { project } = useModal();
  return (
    <CustomModal>
      <TaskCard project={project} />
    </CustomModal>
  );
}
