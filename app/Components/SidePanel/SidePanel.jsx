"use client";
import { useContext } from "react";
import { problems } from "../../MockData/sidePanelData";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
} from "../../../SharedComponents/ui/sidebar";
import { SidePanelCard } from "./SidePanelCard";
import { SidePanelContext } from "../../Contexts/SidePanelContext";

export const SidePanel = () => {
  const { selectedProblemId, setSelectedProblemId } =
    useContext(SidePanelContext);

  return (
    <SidebarProvider className="w-auto shrink-0">
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>YOUR PROGRESS 4/11</SidebarGroupLabel>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>BUGS</SidebarGroupLabel>
            <SidebarMenu>
              {problems.map((problem, count) => (
                <SidebarMenuItem key={problem.questionId}>
                  <SidePanelCard
                    problem={problem}
                    serialNumber={count + 1}
                    isActive={problem.questionId === selectedProblemId}
                    onSelect={() => setSelectedProblemId(problem.questionId)}
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </SidebarProvider>
  );
};
