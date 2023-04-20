import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Typography,
  ListItemIcon,
  TextField,
  CircularProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const AgentList = ({
  agents,
  selectedAgent,
  setSelectedAgent,
  handleAddAgent,
  handleDeleteAgent,
  loading,
}) => {
  const [newAgentName, setNewAgentName] = useState("");

  const handleAddAgentClick = () => {
    handleAddAgent(newAgentName);
    setNewAgentName("");
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Agents
      </Typography>
      <List>
        {agents.map((agent) => (
          <ListItemButton
            button
            key={agent}
            onClick={() => setSelectedAgent(agent)}
            sx={{backgroundColor: (selectedAgent === agent) ? "lightblue" : "unset"}}
          >
            <ListItemText primary={agent} />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDeleteAgent(agent)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemButton>
        ))}
        <ListItem>
          <TextField
            label="New Agent Name"
            value={newAgentName}
            onChange={(e) => setNewAgentName(e.target.value)}
          />
          <ListItemIcon>
            <IconButton
              aria-label="add"
              onClick={handleAddAgentClick}
              disabled={newAgentName.trim() === ""}
            >
              <AddIcon />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
      {loading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default AgentList;
