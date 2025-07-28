import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useModal } from "@/shared/context";
import { SxProps, Theme } from "@mui/material";

const style: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 400, sm: 500, md: 600 },
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

export function CustomModal({ children }: { children: React.ReactNode }) {
  const { open, setOpen } = useModal();
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open} timeout={0}>
          <Box sx={style}>{children}</Box>
        </Fade>
      </Modal>
    </div>
  );
}
