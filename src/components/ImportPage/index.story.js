// @flow

import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import ImportPage from "./"

storiesOf("ImportPage", module)
  .add("Basic", () => (
    <ImportPage
      isDesktop={false}
      oha={{
        interface: {
          type: "image_segmentation",
          availableLabels: ["valid", "invalid"],
          regionTypesAllowed: [
            "bounding-box",
            "polygon",
            // "full-segmentation",
            "point",
            // "pixel-mask"
          ],
        },
        taskData: [
          {
            imageUrl:
              "https://s3.amazonaws.com/asset.workaround.online/example-jobs/sticky-notes/image1.jpg",
          },
          {
            imageUrl:
              "https://s3.amazonaws.com/asset.workaround.online/example-jobs/sticky-notes/image2.jpg",
          },
        ],
      }}
      onChangeOHA={action("onChangeOHA")}
    />
  ))
  .add("Basic Desktop", () => (
    <ImportPage
      isDesktop
      oha={{
        interface: {
          type: "image_segmentation",
          availableLabels: ["valid", "invalid"],
          regionTypesAllowed: [
            "bounding-box",
            "polygon",
            // "full-segmentation",
            "point",
            // "pixel-mask"
          ],
        },
        taskData: [
          {
            imageUrl:
              "https://s3.amazonaws.com/asset.workaround.online/example-jobs/sticky-notes/image1.jpg",
          },
          {
            imageUrl:
              "https://s3.amazonaws.com/asset.workaround.online/example-jobs/sticky-notes/image2.jpg",
          },
        ],
      }}
      onChangeOHA={action("onChangeOHA")}
    />
  ))
