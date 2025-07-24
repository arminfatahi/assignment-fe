import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ProjectCard from "./ProjectCard";
import InputAdornment from "@mui/material/InputAdornment";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useProjects } from "@/context/ProjectsContext";

export default function Projects() {
  const { projects } = useProjects();
  const projectStatus = ["All", "At Risk", "On Track", "Completed"];
  const [status, setStatus] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const filteredProjects = projects?.filter((item) => {
    const matchesQuery =
      !query || item.project_name.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = status === "All" || item.status === status;
    return matchesQuery && matchesStatus;
  });

  return (
    <Box
      sx={{
        flexGrow: 1,
        borderRadius: 5,
        margin: 5,
        border: "1px solid rgba(255, 255, 255, 0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        marginTop={2}
        marginLeft={2}
        marginRight={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          color="primary.contrastText"
          variant="h4"
          fontWeight="bold"
          marginBottom={{ xs: 5, md: 0 }}
        >
          Projects
        </Typography>
        <Stack
          direction={{ xs: "column-reverse", sm: "row" }}
          spacing={2}
          alignItems="center"
        >
          <Box width={{ xs: "100%", sm: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="project-status-label">Project Status</InputLabel>
              <Select
                labelId="project-status-label"
                id="project-status"
                value={status}
                label="Project Status"
                onChange={handleChange}
              >
                {projectStatus.map((stat, id) => (
                  <MenuItem key={id} value={stat}>
                    {stat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <TextField
            id="input-with-icon-textfield"
            label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>

      <Grid
        paddingX={1}
        container
        rowGap={4}
        marginX="auto"
        spacing={1}
        marginTop={5}
        marginBottom={10}
        minHeight={600}
      >
        {filteredProjects?.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            project_name={project.project_name}
            due_date={project.due_date}
            status={project.status}
            tasks={project.tasks}
          />
        ))}
      </Grid>
    </Box>
  );
}
