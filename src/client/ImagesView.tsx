import React from "react";
import Button from "@skbkontur/react-ui/Button";

interface ImagesViewProps {
  imageName: string;
  url: string;
  actual: string;
  diff?: string;
  expect?: string;
  approved: boolean;
  onApprove: (imageName: string) => void;
}

export class ImagesView extends React.Component<ImagesViewProps> {
  render() {
    const { url, actual, diff, expect, approved } = this.props;
    return (
      <div style={{ background: "#eee", textAlign: "center" }}>
        <img src={`${url}/${actual}`} style={{ margin: "20px", border: "1px solid #888" }} />
        {approved ? null : (
          <>
            {diff && <img src={`${url}/${diff}`} style={{ margin: "20px", border: "1px solid #888" }} />}
            {expect && <img src={`${url}/${expect}`} style={{ margin: "20px", border: "1px solid #888" }} />}
            <div style={{ margin: "20px" }}>
              <Button use="primary" onClick={this.handleApprove} width="100px">
                {"Approve"}
              </Button>
            </div>
          </>
        )}
      </div>
    );
  }

  private handleApprove = () => this.props.onApprove(this.props.imageName);
}
