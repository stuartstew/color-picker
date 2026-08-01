import { ActionIcon, Tooltip } from "@mantine/core";
import { GithubLogoIcon } from "@phosphor-icons/react";

export const GithubLink = () => {
  return (
    <Tooltip radius="md" label="Source code">
      <a href="https://github.com/stuartstew/color-picker" target="_blank" rel="noopener noreferrer">
        <ActionIcon variant="transparent" size="lg" aria-label="Source code">
          <GithubLogoIcon style={{ height: "70%", width: "70%" }} />
        </ActionIcon>
      </a>
    </Tooltip>
  );
};
