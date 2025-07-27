import CustomSkeleton from "@/shared/ui/CustomSkeleton";
import { useAuth } from "@/shared/lib/context/";
import { Loading } from "@/shared/ui/Loading";
import { ArrowDropDown } from "@mui/icons-material";
import { Avatar, Box, Button, Popover, Stack, Typography } from "@mui/material";
import { useState } from "react";

function Profile() {
  const { logout, user, loading } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "profile-popover" : undefined;

  return (
    <Stack direction="row" alignItems="center" spacing={-1.2} paddingRight={2}>
      <Button
        aria-describedby={id}
        color="secondary"
        variant="text"
        disabled={loading}
        onClick={handleClick}
        sx={{
          ":hover": { bgcolor: "rgba(238, 238, 238, 0.3)" },
        }}
      >
        {user ? (
          <Avatar
            alt={user?.name}
            src={user?.avatarURL ?? ""}
            sx={{ width: 56, height: 56 }}
          />
        ) : (
          <CustomSkeleton variant="circular">
            <Avatar />
          </CustomSkeleton>
        )}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box width={200}>
          <Box width="100%" textAlign="center" marginTop={1}>
            <Typography color="#aaaaaa">{user?.role}</Typography>
          </Box>
          <Avatar
            alt={user?.name}
            src={user?.avatarURL ?? ""}
            sx={{ mx: "auto", width: 56, height: 56 }}
          />
          <Typography color="textSecondary" sx={{ p: 2 }}>
            Welcome, <b>{user?.name}</b> !
          </Typography>
          <Button
            color="error"
            variant="contained"
            sx={{
              height: 35,
            }}
            onClick={() => {
              setIsLoading(true);
              logout();
            }}
            fullWidth
          >
            {isLoading ? <Loading size={30} /> : <>Logout</>}
          </Button>
        </Box>
      </Popover>
      <ArrowDropDown color="secondary" />
    </Stack>
  );
}

export default Profile;
