import { defineComponent } from 'vue-demi'
import { createBehavior, createResource } from '@designable/core'
import { uid } from '@designable/shared'
import {
  useTreeNode,
  TreeNodeWidget,
  DroppableWidget,
} from '@formily/antdv-designable'
import { PageItem as FormilyPageItem } from '@lj-portal/antdv'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { createVoidFieldSchema } from '../Field'

export const PageItem = composeExport(
  defineComponent({
    name: 'DnNavbar',
    props: {
      title: {},
      titleRight: {},
    },
    setup(props, { attrs }) {
      const nodeRef = useTreeNode()

      return () => {
        const node = nodeRef.value

        return (
          <FormilyPageItem
            class="dn-page-item"
            attrs={attrs}
            scopedSlots={{
              title: () => (
                <span data-content-editable="x-component-props.title">
                  {props.title}
                </span>
              ),
              titleRight: () => (
                <span data-content-editable="x-component-props.titleRight">
                  {props.titleRight}
                </span>
              ),
            }}
          >
            {node.children.length ? (
              node.children.map((child) => (
                <TreeNodeWidget key={uid()} node={child} />
              ))
            ) : (
              <DroppableWidget key={uid()} node={node} />
            )}
          </FormilyPageItem>
        )
      }
    },
  }),
  {
    Behavior: createBehavior({
      name: 'PageItem',
      selector: (node) => node.props['x-component'] === 'PageItem',
      designerProps: {
        droppable: true,
        allowDrop(parent) {
          // 只允许在顶层或PageContainer中
          console.log(parent.props['x-component'])
          return (
            parent.isRoot || parent.props['x-component'] === 'PageContainer'
          )
        },
        propsSchema: createVoidFieldSchema(AllSchemas.PageItem),
      },
      designerLocales: AllLocales.PageItem,
    }),
    Resource: createResource({
      icon: (
        <g
          id="页面-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="页面项" fill-rule="nonzero">
            <rect
              id="矩形"
              fill="#FFFFFF"
              opacity="0"
              x="0"
              y="0"
              width="1024"
              height="1024"
            ></rect>
            <path
              d="M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z"
              id="形状"
              fill="#999999"
            ></path>
            <rect
              id="矩形"
              fill="#1890FF"
              transform="translate(512.000000, 512.000000) scale(-1, 1) rotate(-90.000000) translate(-512.000000, -512.000000) "
              x="502"
              y="112"
              width="20"
              height="800"
              rx="10"
            ></rect>
            <path
              d="M584.928581,-126.155639 C590.146969,-124.347249 592.911317,-118.650919 591.102927,-113.432532 C589.325715,-108.304117 583.793476,-105.545848 578.65014,-107.168716 L578.379819,-107.258187 C573.16358,-109.065833 567.652303,-110 562,-110 C556.477153,-110 552,-114.477153 552,-120 C552,-125.522847 556.477153,-130 562,-130 C569.888963,-130 577.613158,-128.690741 584.928581,-126.155639 Z M630.088269,-76.306637 C631.370742,-70.934756 628.055622,-65.540336 622.683741,-64.257863 C617.31186,-62.97539 611.91744,-66.29051 610.634967,-71.662391 C609.338201,-77.094138 607.138154,-82.245263 604.137952,-86.928348 C601.158708,-91.578719 602.513424,-97.763744 607.163795,-100.742988 C611.814166,-103.722232 617.999191,-102.367516 620.978435,-97.717145 C625.182,-91.155702 628.268511,-83.929037 630.088269,-76.306637 Z M632,-14.109403 C632,-8.586555 627.522847,-4.109403 622,-4.109403 C616.477153,-4.109403 612,-8.586555 612,-14.109403 L612,-34.109403 C612,-39.63225 616.477153,-44.109403 622,-44.109403 C627.522847,-44.109403 632,-39.63225 632,-34.109403 L632,-14.109403 Z M632,45.890597 C632,51.413445 627.522847,55.890597 622,55.890597 C616.477153,55.890597 612,51.413445 612,45.890597 L612,25.890597 C612,20.36775 616.477153,15.890597 622,15.890597 C627.522847,15.890597 632,20.36775 632,25.890597 L632,45.890597 Z M632,105.890597 C632,111.413445 627.522847,115.890597 622,115.890597 C616.477153,115.890597 612,111.413445 612,105.890597 L612,85.890597 C612,80.36775 616.477153,75.890597 622,75.890597 C627.522847,75.890597 632,80.36775 632,85.890597 L632,105.890597 Z M632,165.890597 C632,171.413445 627.522847,175.890597 622,175.890597 C616.477153,175.890597 612,171.413445 612,165.890597 L612,145.890597 C612,140.36775 616.477153,135.890597 622,135.890597 C627.522847,135.890597 632,140.36775 632,145.890597 L632,165.890597 Z M632,225.890597 C632,231.413445 627.522847,235.890597 622,235.890597 C616.477153,235.890597 612,231.413445 612,225.890597 L612,205.890597 C612,200.36775 616.477153,195.890597 622,195.890597 C627.522847,195.890597 632,200.36775 632,205.890597 L632,225.890597 Z M632,285.890597 C632,291.413445 627.522847,295.890597 622,295.890597 C616.477153,295.890597 612,291.413445 612,285.890597 L612,265.890597 C612,260.36775 616.477153,255.890597 622,255.890597 C627.522847,255.890597 632,260.36775 632,265.890597 L632,285.890597 Z M632,345.890597 C632,351.413445 627.522847,355.890597 622,355.890597 C616.477153,355.890597 612,351.413445 612,345.890597 L612,325.890597 C612,320.36775 616.477153,315.890597 622,315.890597 C627.522847,315.890597 632,320.36775 632,325.890597 L632,345.890597 Z M632,405.890597 C632,411.413445 627.522847,415.890597 622,415.890597 C616.477153,415.890597 612,411.413445 612,405.890597 L612,385.890597 C612,380.36775 616.477153,375.890597 622,375.890597 C627.522847,375.890597 632,380.36775 632,385.890597 L632,405.890597 Z M632,465.890597 C632,471.413445 627.522847,475.890597 622,475.890597 C616.477153,475.890597 612,471.413445 612,465.890597 L612,445.890597 C612,440.36775 616.477153,435.890597 622,435.890597 C627.522847,435.890597 632,440.36775 632,445.890597 L632,465.890597 Z M632,525.890597 C632,531.413445 627.522847,535.890597 622,535.890597 C616.477153,535.890597 612,531.413445 612,525.890597 L612,505.890597 C612,500.36775 616.477153,495.890597 622,495.890597 C627.522847,495.890597 632,500.36775 632,505.890597 L632,525.890597 Z M632,585.890597 C632,591.413445 627.522847,595.890597 622,595.890597 C616.477153,595.890597 612,591.413445 612,585.890597 L612,565.890597 C612,560.36775 616.477153,555.890597 622,555.890597 C627.522847,555.890597 632,560.36775 632,565.890597 L632,585.890597 Z M625.582572,649.313533 C623.267558,654.327768 617.326028,656.515919 612.311793,654.200905 C607.38401,651.925805 605.1857,646.148163 607.308686,641.190286 L607.424421,640.930126 C609.641243,636.128569 611.082691,630.994404 611.682313,625.675759 L611.762239,624.914714 C612.297205,619.417837 617.18698,615.395414 622.683857,615.93038 C628.180734,616.465346 632.203157,621.355121 631.668191,626.851998 C630.906019,634.683456 628.840608,642.256748 625.582572,649.313533 Z M571.638325,689.340659 C566.167253,690.095123 561.120459,686.271556 560.365996,680.800484 C559.624319,675.422142 563.306801,670.453818 568.629414,669.570197 L568.90617,669.528155 C574.457635,668.762605 579.790584,667.075198 584.728948,664.549618 C589.646067,662.034903 595.670758,663.982436 598.185473,668.899554 C600.700188,673.816673 598.752655,679.841364 593.835537,682.356079 C586.909177,685.898361 579.422579,688.267206 571.638325,689.340659 Z M510.218805,690 C504.695958,690 500.218805,685.522847 500.218805,680 C500.218805,674.477153 504.695958,670 510.218805,670 L530.218805,670 C535.741653,670 540.218805,674.477153 540.218805,680 C540.218805,685.522847 535.741653,690 530.218805,690 L510.218805,690 Z M448.334497,688.664848 C442.916888,687.591839 439.394893,682.330153 440.467902,676.912544 C441.540911,671.494934 446.802597,667.972939 452.220207,669.045948 C455.413744,669.678458 458.683351,670 462,670 L470.218805,670 C475.741653,670 480.218805,674.477153 480.218805,680 C480.218805,685.522847 475.741653,690 470.218805,690 L462,690 C457.377019,690 452.806019,689.550476 448.334497,688.664848 Z M396.788592,645.489713 C394.776845,640.346298 397.315564,634.545893 402.458979,632.534146 C407.513715,630.557085 413.20298,632.974929 415.307134,637.940827 L415.414546,638.204533 C417.444377,643.394185 420.335633,648.206211 423.955544,652.445868 C427.541718,656.646011 427.043997,662.958068 422.843853,666.544242 C418.64371,670.130415 412.331653,669.632694 408.74548,665.432551 C403.682413,659.502664 399.634218,652.7651 396.788592,645.489713 Z M392,582.328208 C392,576.805361 396.477153,572.328208 402,572.328208 C407.522847,572.328208 412,576.805361 412,582.328208 L412,602.328208 C412,607.851056 407.522847,612.328208 402,612.328208 C396.477153,612.328208 392,607.851056 392,602.328208 L392,582.328208 Z M392,522.328208 C392,516.805361 396.477153,512.328208 402,512.328208 C407.522847,512.328208 412,516.805361 412,522.328208 L412,542.328208 C412,547.851056 407.522847,552.328208 402,552.328208 C396.477153,552.328208 392,547.851056 392,542.328208 L392,522.328208 Z M392,462.328208 C392,456.805361 396.477153,452.328208 402,452.328208 C407.522847,452.328208 412,456.805361 412,462.328208 L412,482.328208 C412,487.851056 407.522847,492.328208 402,492.328208 C396.477153,492.328208 392,487.851056 392,482.328208 L392,462.328208 Z M392,402.328208 C392,396.805361 396.477153,392.328208 402,392.328208 C407.522847,392.328208 412,396.805361 412,402.328208 L412,422.328208 C412,427.851056 407.522847,432.328208 402,432.328208 C396.477153,432.328208 392,427.851056 392,422.328208 L392,402.328208 Z M392,342.328208 C392,336.805361 396.477153,332.328208 402,332.328208 C407.522847,332.328208 412,336.805361 412,342.328208 L412,362.328208 C412,367.851056 407.522847,372.328208 402,372.328208 C396.477153,372.328208 392,367.851056 392,362.328208 L392,342.328208 Z M392,282.328208 C392,276.805361 396.477153,272.328208 402,272.328208 C407.522847,272.328208 412,276.805361 412,282.328208 L412,302.328208 C412,307.851056 407.522847,312.328208 402,312.328208 C396.477153,312.328208 392,307.851056 392,302.328208 L392,282.328208 Z M392,222.328208 C392,216.805361 396.477153,212.328208 402,212.328208 C407.522847,212.328208 412,216.805361 412,222.328208 L412,242.328208 C412,247.851056 407.522847,252.328208 402,252.328208 C396.477153,252.328208 392,247.851056 392,242.328208 L392,222.328208 Z M392,162.328208 C392,156.805361 396.477153,152.328208 402,152.328208 C407.522847,152.328208 412,156.805361 412,162.328208 L412,182.328208 C412,187.851056 407.522847,192.328208 402,192.328208 C396.477153,192.328208 392,187.851056 392,182.328208 L392,162.328208 Z M392,102.328208 C392,96.805361 396.477153,92.328208 402,92.328208 C407.522847,92.328208 412,96.805361 412,102.328208 L412,122.328208 C412,127.851056 407.522847,132.328208 402,132.328208 C396.477153,132.328208 392,127.851056 392,122.328208 L392,102.328208 Z M392,42.328208 C392,36.805361 396.477153,32.328208 402,32.328208 C407.522847,32.328208 412,36.805361 412,42.328208 L412,62.328208 C412,67.851056 407.522847,72.328208 402,72.328208 C396.477153,72.328208 392,67.851056 392,62.328208 L392,42.328208 Z M392,-17.671792 C392,-23.194639 396.477153,-27.671792 402,-27.671792 C407.522847,-27.671792 412,-23.194639 412,-17.671792 L412,2.328208 C412,7.851056 407.522847,12.328208 402,12.328208 C396.477153,12.328208 392,7.851056 392,2.328208 L392,-17.671792 Z M395.003353,-80.338904 C396.606034,-85.624096 402.189758,-88.609362 407.474951,-87.006681 C412.670564,-85.431164 415.643552,-80.008411 414.220277,-74.804058 L414.142728,-74.535083 C412.727567,-69.868279 412,-64.988616 412,-60 L412,-57.671792 C412,-52.148944 407.522847,-47.671792 402,-47.671792 C396.477153,-47.671792 392,-52.148944 392,-57.671792 L392,-60 C392,-66.96042 393.019114,-73.79544 395.003353,-80.338904 Z M443.077691,-127.409852 C448.395706,-128.900008 453.914819,-125.796916 455.404975,-120.478901 C456.869874,-115.251022 453.895909,-109.828804 448.742512,-108.23084 L448.474024,-108.151617 C443.345681,-106.714608 438.496997,-104.463533 434.09376,-101.495235 L433.467775,-101.066324 C428.935521,-97.910295 422.702936,-99.025946 419.546907,-103.5582 C416.390878,-108.090454 417.506528,-114.323038 422.038782,-117.479067 C428.435844,-121.933653 435.539059,-125.297458 443.077691,-127.409852 Z M505.562389,-130 C511.085237,-130 515.562389,-125.522847 515.562389,-120 C515.562389,-114.477153 511.085237,-110 505.562389,-110 L485.562389,-110 C480.039542,-110 475.562389,-114.477153 475.562389,-120 C475.562389,-125.522847 480.039542,-130 485.562389,-130 L505.562389,-130 Z M562,-130 C567.522847,-130 572,-125.522847 572,-120 C572,-114.477153 567.522847,-110 562,-110 L545.562389,-110 C540.039542,-110 535.562389,-114.477153 535.562389,-120 C535.562389,-125.522847 540.039542,-130 545.562389,-130 L562,-130 Z"
              id="形状"
              fill="#999999"
              transform="translate(512.000000, 280.000000) rotate(-270.000000) translate(-512.000000, -280.000000) "
            ></path>
            <path
              d="M584.928581,337.844361 C590.146969,339.652751 592.911317,345.349081 591.102927,350.567468 C589.325715,355.695883 583.793476,358.454152 578.65014,356.831284 L578.379819,356.741813 C573.16358,354.934167 567.652303,354 562,354 C556.477153,354 552,349.522847 552,344 C552,338.477153 556.477153,334 562,334 C569.888963,334 577.613158,335.309259 584.928581,337.844361 Z M630.088269,387.693363 C631.370742,393.065244 628.055622,398.459664 622.683741,399.742137 C617.31186,401.02461 611.91744,397.70949 610.634967,392.337609 C609.338201,386.905862 607.138154,381.754737 604.137952,377.071652 C601.158708,372.421281 602.513424,366.236256 607.163795,363.257012 C611.814166,360.277768 617.999191,361.632484 620.978435,366.282855 C625.182,372.844298 628.268511,380.070963 630.088269,387.693363 Z M632,449.890597 C632,455.413445 627.522847,459.890597 622,459.890597 C616.477153,459.890597 612,455.413445 612,449.890597 L612,429.890597 C612,424.36775 616.477153,419.890597 622,419.890597 C627.522847,419.890597 632,424.36775 632,429.890597 L632,449.890597 Z M632,509.890597 C632,515.413445 627.522847,519.890597 622,519.890597 C616.477153,519.890597 612,515.413445 612,509.890597 L612,489.890597 C612,484.36775 616.477153,479.890597 622,479.890597 C627.522847,479.890597 632,484.36775 632,489.890597 L632,509.890597 Z M632,569.890597 C632,575.413445 627.522847,579.890597 622,579.890597 C616.477153,579.890597 612,575.413445 612,569.890597 L612,549.890597 C612,544.36775 616.477153,539.890597 622,539.890597 C627.522847,539.890597 632,544.36775 632,549.890597 L632,569.890597 Z M632,629.890597 C632,635.413445 627.522847,639.890597 622,639.890597 C616.477153,639.890597 612,635.413445 612,629.890597 L612,609.890597 C612,604.36775 616.477153,599.890597 622,599.890597 C627.522847,599.890597 632,604.36775 632,609.890597 L632,629.890597 Z M632,689.890597 C632,695.413445 627.522847,699.890597 622,699.890597 C616.477153,699.890597 612,695.413445 612,689.890597 L612,669.890597 C612,664.36775 616.477153,659.890597 622,659.890597 C627.522847,659.890597 632,664.36775 632,669.890597 L632,689.890597 Z M632,749.890597 C632,755.413445 627.522847,759.890597 622,759.890597 C616.477153,759.890597 612,755.413445 612,749.890597 L612,729.890597 C612,724.36775 616.477153,719.890597 622,719.890597 C627.522847,719.890597 632,724.36775 632,729.890597 L632,749.890597 Z M632,809.890597 C632,815.413445 627.522847,819.890597 622,819.890597 C616.477153,819.890597 612,815.413445 612,809.890597 L612,789.890597 C612,784.36775 616.477153,779.890597 622,779.890597 C627.522847,779.890597 632,784.36775 632,789.890597 L632,809.890597 Z M632,869.890597 C632,875.413445 627.522847,879.890597 622,879.890597 C616.477153,879.890597 612,875.413445 612,869.890597 L612,849.890597 C612,844.36775 616.477153,839.890597 622,839.890597 C627.522847,839.890597 632,844.36775 632,849.890597 L632,869.890597 Z M632,929.890597 C632,935.413445 627.522847,939.890597 622,939.890597 C616.477153,939.890597 612,935.413445 612,929.890597 L612,909.890597 C612,904.36775 616.477153,899.890597 622,899.890597 C627.522847,899.890597 632,904.36775 632,909.890597 L632,929.890597 Z M632,989.890597 C632,995.413445 627.522847,999.890597 622,999.890597 C616.477153,999.890597 612,995.413445 612,989.890597 L612,969.890597 C612,964.36775 616.477153,959.890597 622,959.890597 C627.522847,959.890597 632,964.36775 632,969.890597 L632,989.890597 Z M632,1049.8906 C632,1055.41345 627.522847,1059.8906 622,1059.8906 C616.477153,1059.8906 612,1055.41345 612,1049.8906 L612,1029.8906 C612,1024.36775 616.477153,1019.8906 622,1019.8906 C627.522847,1019.8906 632,1024.36775 632,1029.8906 L632,1049.8906 Z M625.582572,1113.31353 C623.267558,1118.32777 617.326028,1120.51592 612.311793,1118.20091 C607.38401,1115.92581 605.1857,1110.14816 607.308686,1105.19029 L607.424421,1104.93013 C609.641243,1100.12857 611.082691,1094.9944 611.682313,1089.67576 L611.762239,1088.91471 C612.297205,1083.41784 617.18698,1079.39541 622.683857,1079.93038 C628.180734,1080.46535 632.203157,1085.35512 631.668191,1090.852 C630.906019,1098.68346 628.840608,1106.25675 625.582572,1113.31353 Z M571.638325,1153.34066 C566.167253,1154.09512 561.120459,1150.27156 560.365996,1144.80048 C559.624319,1139.42214 563.306801,1134.45382 568.629414,1133.5702 L568.90617,1133.52816 C574.457635,1132.76261 579.790584,1131.0752 584.728948,1128.54962 C589.646067,1126.0349 595.670758,1127.98244 598.185473,1132.89955 C600.700188,1137.81667 598.752655,1143.84136 593.835537,1146.35608 C586.909177,1149.89836 579.422579,1152.26721 571.638325,1153.34066 Z M510.218805,1154 C504.695958,1154 500.218805,1149.52285 500.218805,1144 C500.218805,1138.47715 504.695958,1134 510.218805,1134 L530.218805,1134 C535.741653,1134 540.218805,1138.47715 540.218805,1144 C540.218805,1149.52285 535.741653,1154 530.218805,1154 L510.218805,1154 Z M448.334497,1152.66485 C442.916888,1151.59184 439.394893,1146.33015 440.467902,1140.91254 C441.540911,1135.49493 446.802597,1131.97294 452.220207,1133.04595 C455.413744,1133.67846 458.683351,1134 462,1134 L470.218805,1134 C475.741653,1134 480.218805,1138.47715 480.218805,1144 C480.218805,1149.52285 475.741653,1154 470.218805,1154 L462,1154 C457.377019,1154 452.806019,1153.55048 448.334497,1152.66485 Z M396.788592,1109.48971 C394.776845,1104.3463 397.315564,1098.54589 402.458979,1096.53415 C407.513715,1094.55709 413.20298,1096.97493 415.307134,1101.94083 L415.414546,1102.20453 C417.444377,1107.39419 420.335633,1112.20621 423.955544,1116.44587 C427.541718,1120.64601 427.043997,1126.95807 422.843853,1130.54424 C418.64371,1134.13042 412.331653,1133.63269 408.74548,1129.43255 C403.682413,1123.50266 399.634218,1116.7651 396.788592,1109.48971 Z M392,1046.32821 C392,1040.80536 396.477153,1036.32821 402,1036.32821 C407.522847,1036.32821 412,1040.80536 412,1046.32821 L412,1066.32821 C412,1071.85106 407.522847,1076.32821 402,1076.32821 C396.477153,1076.32821 392,1071.85106 392,1066.32821 L392,1046.32821 Z M392,986.328208 C392,980.805361 396.477153,976.328208 402,976.328208 C407.522847,976.328208 412,980.805361 412,986.328208 L412,1006.32821 C412,1011.85106 407.522847,1016.32821 402,1016.32821 C396.477153,1016.32821 392,1011.85106 392,1006.32821 L392,986.328208 Z M392,926.328208 C392,920.805361 396.477153,916.328208 402,916.328208 C407.522847,916.328208 412,920.805361 412,926.328208 L412,946.328208 C412,951.851056 407.522847,956.328208 402,956.328208 C396.477153,956.328208 392,951.851056 392,946.328208 L392,926.328208 Z M392,866.328208 C392,860.805361 396.477153,856.328208 402,856.328208 C407.522847,856.328208 412,860.805361 412,866.328208 L412,886.328208 C412,891.851056 407.522847,896.328208 402,896.328208 C396.477153,896.328208 392,891.851056 392,886.328208 L392,866.328208 Z M392,806.328208 C392,800.805361 396.477153,796.328208 402,796.328208 C407.522847,796.328208 412,800.805361 412,806.328208 L412,826.328208 C412,831.851056 407.522847,836.328208 402,836.328208 C396.477153,836.328208 392,831.851056 392,826.328208 L392,806.328208 Z M392,746.328208 C392,740.805361 396.477153,736.328208 402,736.328208 C407.522847,736.328208 412,740.805361 412,746.328208 L412,766.328208 C412,771.851056 407.522847,776.328208 402,776.328208 C396.477153,776.328208 392,771.851056 392,766.328208 L392,746.328208 Z M392,686.328208 C392,680.805361 396.477153,676.328208 402,676.328208 C407.522847,676.328208 412,680.805361 412,686.328208 L412,706.328208 C412,711.851056 407.522847,716.328208 402,716.328208 C396.477153,716.328208 392,711.851056 392,706.328208 L392,686.328208 Z M392,626.328208 C392,620.805361 396.477153,616.328208 402,616.328208 C407.522847,616.328208 412,620.805361 412,626.328208 L412,646.328208 C412,651.851056 407.522847,656.328208 402,656.328208 C396.477153,656.328208 392,651.851056 392,646.328208 L392,626.328208 Z M392,566.328208 C392,560.805361 396.477153,556.328208 402,556.328208 C407.522847,556.328208 412,560.805361 412,566.328208 L412,586.328208 C412,591.851056 407.522847,596.328208 402,596.328208 C396.477153,596.328208 392,591.851056 392,586.328208 L392,566.328208 Z M392,506.328208 C392,500.805361 396.477153,496.328208 402,496.328208 C407.522847,496.328208 412,500.805361 412,506.328208 L412,526.328208 C412,531.851056 407.522847,536.328208 402,536.328208 C396.477153,536.328208 392,531.851056 392,526.328208 L392,506.328208 Z M392,446.328208 C392,440.805361 396.477153,436.328208 402,436.328208 C407.522847,436.328208 412,440.805361 412,446.328208 L412,466.328208 C412,471.851056 407.522847,476.328208 402,476.328208 C396.477153,476.328208 392,471.851056 392,466.328208 L392,446.328208 Z M395.003353,383.661096 C396.606034,378.375904 402.189758,375.390638 407.474951,376.993319 C412.670564,378.568836 415.643552,383.991589 414.220277,389.195942 L414.142728,389.464917 C412.727567,394.131721 412,399.011384 412,404 L412,406.328208 C412,411.851056 407.522847,416.328208 402,416.328208 C396.477153,416.328208 392,411.851056 392,406.328208 L392,404 C392,397.03958 393.019114,390.20456 395.003353,383.661096 Z M443.077691,336.590148 C448.395706,335.099992 453.914819,338.203084 455.404975,343.521099 C456.869874,348.748978 453.895909,354.171196 448.742512,355.76916 L448.474024,355.848383 C443.345681,357.285392 438.496997,359.536467 434.09376,362.504765 L433.467775,362.933676 C428.935521,366.089705 422.702936,364.974054 419.546907,360.4418 C416.390878,355.909546 417.506528,349.676962 422.038782,346.520933 C428.435844,342.066347 435.539059,338.702542 443.077691,336.590148 Z M505.562389,334 C511.085237,334 515.562389,338.477153 515.562389,344 C515.562389,349.522847 511.085237,354 505.562389,354 L485.562389,354 C480.039542,354 475.562389,349.522847 475.562389,344 C475.562389,338.477153 480.039542,334 485.562389,334 L505.562389,334 Z M562,334 C567.522847,334 572,338.477153 572,344 C572,349.522847 567.522847,354 562,354 L545.562389,354 C540.039542,354 535.562389,349.522847 535.562389,344 C535.562389,338.477153 540.039542,334 545.562389,334 L562,334 Z"
              id="形状备份"
              fill="#999999"
              transform="translate(512.000000, 744.000000) rotate(-270.000000) translate(-512.000000, -744.000000) "
            ></path>
          </g>
        </g>
      ),
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'PageItem',
            'x-component-props': {
              title: 'Title',
              titleRightLinkTarget: '_self',
            },
          },
        },
      ],
    }),
  }
)
