import { TaskCard } from "@/features/tasks/ui";
import { useModal } from "@/shared/context";
import { CustomModal } from "@/shared/ui";

export default function TaskModal() {
  const { project } = useModal();
  return (
    <CustomModal>
      <TaskCard project={project} />
    </CustomModal>
  );
}
