'use client';
import { Header } from "./core/header"
import { ToggleButton } from "./core/toggle-button"
import { Video } from "./core/video"

export const DesignerDeveloperSwitcher: React.FunctionComponent = () => {
    return (
        <div className="container-3">
            {/* <div>
                <ToggleButton buttons={[{id: '1', label: 'Hello'}]} selected="1" setSelected={() => undefined}></ToggleButton>
            </div> */}
            <div className="header-wrapper mb-8">
                <Header>Pure Harmony for Designers and Developers.</Header>
            </div>
            <div className="mb-5">
                <Video/>
            </div>
      </div>
    )
}