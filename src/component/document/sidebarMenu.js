import React from "react";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import { useScrollTrigger } from "@material-ui/core";
const SidebarMenu = () => {
  const [menu, setMenu] = useState(true);
  return (
    <>
      {!menu && (
        <div className="menu-DocumentsSmall">
          <MenuList>
            <MenuItem onClick={() => setMenu(true)}>
              <Typography variant="body2" color="text.secondary">
                ⌘X
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
            </MenuItem>

            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
            </MenuItem>

            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
            </MenuItem>
          </MenuList>
        </div>
      )}
      {menu && (
        <div className="menu-Documents">
          <MenuList>
            <MenuItem onClick={() => setMenu(false)}>
              <ListItemIcon></ListItemIcon>
              <ListItemText> </ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘X
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText className="ListItemText">Document Register</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText className="ListItemText">Drawings</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText className="ListItemText">Temporary Files</ListItemText>
            </MenuItem>
            <Typography variant="body2" color="text.secondary" sx={{ paddingLeft: "18px", paddingTop: "30px", paddingBottom: "7px" }}>
              My Project's Searches
            </Typography>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText className="ListItemText">Document Export_PDP</ListItemText>
            </MenuItem>
            <Typography variant="body2" color="text.secondary" sx={{ paddingLeft: "18px", paddingTop: "30px", paddingBottom: "7px" }}>
              Standard Searches
            </Typography>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText className="ListItemText">Approved</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText className="ListItemText">Issued for approval</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText className="ListItemText">Drawings modified tod...</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText className="ListItemText">Temporary files uploade...</ListItemText>
            </MenuItem>
          </MenuList>
        </div>
      )}
      <div className="menuSmall-Documents">
        <MenuList>
          <MenuItem>
            <Typography variant="body2" color="text.secondary">
              ⌘X
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentPaste fontSize="small" />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentPaste fontSize="small" />
            </ListItemIcon>
          </MenuItem>

          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
          </MenuItem>

          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
          </MenuItem>
        </MenuList>
      </div>
    </>
  );
};

export default SidebarMenu;
