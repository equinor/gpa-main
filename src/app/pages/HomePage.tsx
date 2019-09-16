import React from "react";
import { NavBar } from "../components/ui/NavBar";
import "./homePage.css";
import { SiteContent } from "../components/ui/SiteContent";
import { SiteMenu } from "../components/ui/SiteMenu";
import { PageContent } from "../components/ui/PageContent";
import { TitleBlock } from "../components/ui/TitleBlock";


export interface IProps { }

export interface IState { }

export class HomePage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="homePage">
        <NavBar></NavBar>
        <SiteContent>
          <SiteMenu></SiteMenu>
          <PageContent>
            <TitleBlock title={"Calculator"}></TitleBlock>
          </PageContent>
        </SiteContent>
      </div>
    );
  }
};
