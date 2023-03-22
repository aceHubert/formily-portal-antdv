import { defineComponent } from 'vue-demi'
import { createBehavior, createResource } from '@designable/core'
import { uid } from '@designable/shared'
import {
  useTreeNode,
  DroppableWidget,
  TreeNodeWidget,
} from '@formily/antdv-designable'
import { Navbar as FormilyNavbar } from '@formily-portal/antdv'
import { composeExport } from '@formily-portal/antdv/esm/__builtins__'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { createFieldSchema } from '../Field'
import './styles.less'

import type { TreeNode } from '@designable/core'

export const Navbar = composeExport(
  defineComponent({
    name: 'DnNavbar',
    props: { title: {} },
    setup(props, { attrs, slots }) {
      const nodeRef = useTreeNode()

      return () => {
        const node = nodeRef.value

        return (
          <FormilyNavbar
            class="dn-navbar"
            attrs={attrs}
            scopedSlots={{
              title: () => (
                <span data-content-editable="x-component-props.title">
                  {props.title}
                </span>
              ),
            }}
          >
            {node.children.length ? (
              node.children.map((child) => (
                <TreeNodeWidget key={uid()} node={child} />
              ))
            ) : (
              <DroppableWidget
                key={uid()}
                node={node}
                height={48}
                style={{ width: '100%' }}
              />
            )}
          </FormilyNavbar>
        )
      }
    },
  }),
  {
    Menu: FormilyNavbar.Menu,
    Behavior: createBehavior(
      {
        name: 'Navbar',
        extends: ['Field'],
        selector: (node) => node.props['x-component'] === 'Navbar',
        designerProps: {
          droppable: true,
          allowDrop(parent) {
            // 只允许在顶层的第一位并只能添加一次
            return (
              parent.isRoot &&
              !parent.children.some(
                (node) => node.props['x-component'] === 'Navbar'
              )
            )
          },
          // allowAppend(target, sources) {
          // return sources?.every((node) =>
          //   node.props['x-component'].startsWith('Navbar.')
          // )
          // },
          // allowSiblings(target, sources) {
          //   // 只允许往后面加
          //   return target.parent.firstChild !== target
          // },
          propsSchema: createFieldSchema(AllSchemas.Navbar),
        },
        designerLocales: AllLocales.Navbar,
      },
      {
        name: 'Navbar.Menu',
        extends: ['Field'],
        selector: (node) => node.props['x-component'] === 'Navbar.Menu',
        designerProps: {
          allowDrop(parent) {
            return (
              parent.props['x-component'] === 'Navbar' &&
              !parent.children.some(
                (node) => node.props['x-component'] === 'Navbar.Menu'
              )
            )
          },
          propsSchema: createFieldSchema(AllSchemas.Navbar.Menu),
        },
        designerLocales: AllLocales.NavbarMenu,
      }
    ),
    Resource: createResource(
      {
        icon: (
          <g
            id="页面-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="导航栏" fill-rule="nonzero">
              <path
                d="M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z"
                id="形状"
                fill="#999999"
              ></path>
              <rect
                id="矩形"
                fill="#1890FF"
                transform="translate(734.000000, 323.000000) scale(-1, 1) rotate(-90.000000) translate(-734.000000, -323.000000) "
                x="724"
                y="223"
                width="20"
                height="200"
                rx="10"
              ></rect>
              <rect
                id="矩形备份-11"
                fill="#1890FF"
                transform="translate(734.000000, 747.000000) scale(-1, 1) rotate(-90.000000) translate(-734.000000, -747.000000) "
                x="724"
                y="647"
                width="20"
                height="200"
                rx="10"
              ></rect>
              <path
                d="M584.928581,-106.155639 C590.146969,-104.347249 592.911317,-98.650919 591.102927,-93.432532 C589.325715,-88.304117 583.793476,-85.545848 578.65014,-87.168716 L578.379819,-87.258187 C573.16358,-89.065833 567.652303,-90 562,-90 C556.477153,-90 552,-94.477153 552,-100 C552,-105.522847 556.477153,-110 562,-110 C569.888963,-110 577.613158,-108.690741 584.928581,-106.155639 Z M630.088269,-56.306637 C631.370742,-50.934756 628.055622,-45.540336 622.683741,-44.257863 C617.31186,-42.97539 611.91744,-46.29051 610.634967,-51.662391 C609.338201,-57.094138 607.138154,-62.245263 604.137952,-66.928348 C601.158708,-71.578719 602.513424,-77.763744 607.163795,-80.742988 C611.814166,-83.722232 617.999191,-82.367516 620.978435,-77.717145 C625.182,-71.155702 628.268511,-63.929037 630.088269,-56.306637 Z M632,5.890597 C632,11.413445 627.522847,15.890597 622,15.890597 C616.477153,15.890597 612,11.413445 612,5.890597 L612,-14.109403 C612,-19.63225 616.477153,-24.109403 622,-24.109403 C627.522847,-24.109403 632,-19.63225 632,-14.109403 L632,5.890597 Z M632,65.890597 C632,71.413445 627.522847,75.890597 622,75.890597 C616.477153,75.890597 612,71.413445 612,65.890597 L612,45.890597 C612,40.36775 616.477153,35.890597 622,35.890597 C627.522847,35.890597 632,40.36775 632,45.890597 L632,65.890597 Z M632,125.890597 C632,131.413445 627.522847,135.890597 622,135.890597 C616.477153,135.890597 612,131.413445 612,125.890597 L612,105.890597 C612,100.36775 616.477153,95.890597 622,95.890597 C627.522847,95.890597 632,100.36775 632,105.890597 L632,125.890597 Z M632,185.890597 C632,191.413445 627.522847,195.890597 622,195.890597 C616.477153,195.890597 612,191.413445 612,185.890597 L612,165.890597 C612,160.36775 616.477153,155.890597 622,155.890597 C627.522847,155.890597 632,160.36775 632,165.890597 L632,185.890597 Z M632,245.890597 C632,251.413445 627.522847,255.890597 622,255.890597 C616.477153,255.890597 612,251.413445 612,245.890597 L612,225.890597 C612,220.36775 616.477153,215.890597 622,215.890597 C627.522847,215.890597 632,220.36775 632,225.890597 L632,245.890597 Z M632,305.890597 C632,311.413445 627.522847,315.890597 622,315.890597 C616.477153,315.890597 612,311.413445 612,305.890597 L612,285.890597 C612,280.36775 616.477153,275.890597 622,275.890597 C627.522847,275.890597 632,280.36775 632,285.890597 L632,305.890597 Z M632,365.890597 C632,371.413445 627.522847,375.890597 622,375.890597 C616.477153,375.890597 612,371.413445 612,365.890597 L612,345.890597 C612,340.36775 616.477153,335.890597 622,335.890597 C627.522847,335.890597 632,340.36775 632,345.890597 L632,365.890597 Z M632,425.890597 C632,431.413445 627.522847,435.890597 622,435.890597 C616.477153,435.890597 612,431.413445 612,425.890597 L612,405.890597 C612,400.36775 616.477153,395.890597 622,395.890597 C627.522847,395.890597 632,400.36775 632,405.890597 L632,425.890597 Z M632,485.890597 C632,491.413445 627.522847,495.890597 622,495.890597 C616.477153,495.890597 612,491.413445 612,485.890597 L612,465.890597 C612,460.36775 616.477153,455.890597 622,455.890597 C627.522847,455.890597 632,460.36775 632,465.890597 L632,485.890597 Z M632,545.890597 C632,551.413445 627.522847,555.890597 622,555.890597 C616.477153,555.890597 612,551.413445 612,545.890597 L612,525.890597 C612,520.36775 616.477153,515.890597 622,515.890597 C627.522847,515.890597 632,520.36775 632,525.890597 L632,545.890597 Z M632,605.890597 C632,611.413445 627.522847,615.890597 622,615.890597 C616.477153,615.890597 612,611.413445 612,605.890597 L612,585.890597 C612,580.36775 616.477153,575.890597 622,575.890597 C627.522847,575.890597 632,580.36775 632,585.890597 L632,605.890597 Z M625.582572,669.313533 C623.267558,674.327768 617.326028,676.515919 612.311793,674.200905 C607.38401,671.925805 605.1857,666.148163 607.308686,661.190286 L607.424421,660.930126 C609.641243,656.128569 611.082691,650.994404 611.682313,645.675759 L611.762239,644.914714 C612.297205,639.417837 617.18698,635.395414 622.683857,635.93038 C628.180734,636.465346 632.203157,641.355121 631.668191,646.851998 C630.906019,654.683456 628.840608,662.256748 625.582572,669.313533 Z M571.638325,709.340659 C566.167253,710.095123 561.120459,706.271556 560.365996,700.800484 C559.624319,695.422142 563.306801,690.453818 568.629414,689.570197 L568.90617,689.528155 C574.457635,688.762605 579.790584,687.075198 584.728948,684.549618 C589.646067,682.034903 595.670758,683.982436 598.185473,688.899554 C600.700188,693.816673 598.752655,699.841364 593.835537,702.356079 C586.909177,705.898361 579.422579,708.267206 571.638325,709.340659 Z M510.218805,710 C504.695958,710 500.218805,705.522847 500.218805,700 C500.218805,694.477153 504.695958,690 510.218805,690 L530.218805,690 C535.741653,690 540.218805,694.477153 540.218805,700 C540.218805,705.522847 535.741653,710 530.218805,710 L510.218805,710 Z M448.334497,708.664848 C442.916888,707.591839 439.394893,702.330153 440.467902,696.912544 C441.540911,691.494934 446.802597,687.972939 452.220207,689.045948 C455.413744,689.678458 458.683351,690 462,690 L470.218805,690 C475.741653,690 480.218805,694.477153 480.218805,700 C480.218805,705.522847 475.741653,710 470.218805,710 L462,710 C457.377019,710 452.806019,709.550476 448.334497,708.664848 Z M396.788592,665.489713 C394.776845,660.346298 397.315564,654.545893 402.458979,652.534146 C407.513715,650.557085 413.20298,652.974929 415.307134,657.940827 L415.414546,658.204533 C417.444377,663.394185 420.335633,668.206211 423.955544,672.445868 C427.541718,676.646011 427.043997,682.958068 422.843853,686.544242 C418.64371,690.130415 412.331653,689.632694 408.74548,685.432551 C403.682413,679.502664 399.634218,672.7651 396.788592,665.489713 Z M392,602.328208 C392,596.805361 396.477153,592.328208 402,592.328208 C407.522847,592.328208 412,596.805361 412,602.328208 L412,622.328208 C412,627.851056 407.522847,632.328208 402,632.328208 C396.477153,632.328208 392,627.851056 392,622.328208 L392,602.328208 Z M392,542.328208 C392,536.805361 396.477153,532.328208 402,532.328208 C407.522847,532.328208 412,536.805361 412,542.328208 L412,562.328208 C412,567.851056 407.522847,572.328208 402,572.328208 C396.477153,572.328208 392,567.851056 392,562.328208 L392,542.328208 Z M392,482.328208 C392,476.805361 396.477153,472.328208 402,472.328208 C407.522847,472.328208 412,476.805361 412,482.328208 L412,502.328208 C412,507.851056 407.522847,512.328208 402,512.328208 C396.477153,512.328208 392,507.851056 392,502.328208 L392,482.328208 Z M392,422.328208 C392,416.805361 396.477153,412.328208 402,412.328208 C407.522847,412.328208 412,416.805361 412,422.328208 L412,442.328208 C412,447.851056 407.522847,452.328208 402,452.328208 C396.477153,452.328208 392,447.851056 392,442.328208 L392,422.328208 Z M392,362.328208 C392,356.805361 396.477153,352.328208 402,352.328208 C407.522847,352.328208 412,356.805361 412,362.328208 L412,382.328208 C412,387.851056 407.522847,392.328208 402,392.328208 C396.477153,392.328208 392,387.851056 392,382.328208 L392,362.328208 Z M392,302.328208 C392,296.805361 396.477153,292.328208 402,292.328208 C407.522847,292.328208 412,296.805361 412,302.328208 L412,322.328208 C412,327.851056 407.522847,332.328208 402,332.328208 C396.477153,332.328208 392,327.851056 392,322.328208 L392,302.328208 Z M392,242.328208 C392,236.805361 396.477153,232.328208 402,232.328208 C407.522847,232.328208 412,236.805361 412,242.328208 L412,262.328208 C412,267.851056 407.522847,272.328208 402,272.328208 C396.477153,272.328208 392,267.851056 392,262.328208 L392,242.328208 Z M392,182.328208 C392,176.805361 396.477153,172.328208 402,172.328208 C407.522847,172.328208 412,176.805361 412,182.328208 L412,202.328208 C412,207.851056 407.522847,212.328208 402,212.328208 C396.477153,212.328208 392,207.851056 392,202.328208 L392,182.328208 Z M392,122.328208 C392,116.805361 396.477153,112.328208 402,112.328208 C407.522847,112.328208 412,116.805361 412,122.328208 L412,142.328208 C412,147.851056 407.522847,152.328208 402,152.328208 C396.477153,152.328208 392,147.851056 392,142.328208 L392,122.328208 Z M392,62.328208 C392,56.805361 396.477153,52.328208 402,52.328208 C407.522847,52.328208 412,56.805361 412,62.328208 L412,82.328208 C412,87.851056 407.522847,92.328208 402,92.328208 C396.477153,92.328208 392,87.851056 392,82.328208 L392,62.328208 Z M392,2.328208 C392,-3.194639 396.477153,-7.671792 402,-7.671792 C407.522847,-7.671792 412,-3.194639 412,2.328208 L412,22.328208 C412,27.851056 407.522847,32.328208 402,32.328208 C396.477153,32.328208 392,27.851056 392,22.328208 L392,2.328208 Z M395.003353,-60.338904 C396.606034,-65.624096 402.189758,-68.609362 407.474951,-67.006681 C412.670564,-65.431164 415.643552,-60.008411 414.220277,-54.804058 L414.142728,-54.535083 C412.727567,-49.868279 412,-44.988616 412,-40 L412,-37.671792 C412,-32.148944 407.522847,-27.671792 402,-27.671792 C396.477153,-27.671792 392,-32.148944 392,-37.671792 L392,-40 C392,-46.96042 393.019114,-53.79544 395.003353,-60.338904 Z M443.077691,-107.409852 C448.395706,-108.900008 453.914819,-105.796916 455.404975,-100.478901 C456.869874,-95.251022 453.895909,-89.828804 448.742512,-88.23084 L448.474024,-88.151617 C443.345681,-86.714608 438.496997,-84.463533 434.09376,-81.495235 L433.467775,-81.066324 C428.935521,-77.910295 422.702936,-79.025946 419.546907,-83.5582 C416.390878,-88.090454 417.506528,-94.323038 422.038782,-97.479067 C428.435844,-101.933653 435.539059,-105.297458 443.077691,-107.409852 Z M505.562389,-110 C511.085237,-110 515.562389,-105.522847 515.562389,-100 C515.562389,-94.477153 511.085237,-90 505.562389,-90 L485.562389,-90 C480.039542,-90 475.562389,-94.477153 475.562389,-100 C475.562389,-105.522847 480.039542,-110 485.562389,-110 L505.562389,-110 Z M562,-110 C567.522847,-110 572,-105.522847 572,-100 C572,-94.477153 567.522847,-90 562,-90 L545.562389,-90 C540.039542,-90 535.562389,-94.477153 535.562389,-100 C535.562389,-105.522847 540.039542,-110 545.562389,-110 L562,-110 Z"
                id="形状"
                fill="#999999"
                transform="translate(512.000000, 300.000000) rotate(-270.000000) translate(-512.000000, -300.000000) "
              ></path>
              <path
                d="M584.928581,317.844361 C590.146969,319.652751 592.911317,325.349081 591.102927,330.567468 C589.325715,335.695883 583.793476,338.454152 578.65014,336.831284 L578.379819,336.741813 C573.16358,334.934167 567.652303,334 562,334 C556.477153,334 552,329.522847 552,324 C552,318.477153 556.477153,314 562,314 C569.888963,314 577.613158,315.309259 584.928581,317.844361 Z M630.088269,367.693363 C631.370742,373.065244 628.055622,378.459664 622.683741,379.742137 C617.31186,381.02461 611.91744,377.70949 610.634967,372.337609 C609.338201,366.905862 607.138154,361.754737 604.137952,357.071652 C601.158708,352.421281 602.513424,346.236256 607.163795,343.257012 C611.814166,340.277768 617.999191,341.632484 620.978435,346.282855 C625.182,352.844298 628.268511,360.070963 630.088269,367.693363 Z M632,429.890597 C632,435.413445 627.522847,439.890597 622,439.890597 C616.477153,439.890597 612,435.413445 612,429.890597 L612,409.890597 C612,404.36775 616.477153,399.890597 622,399.890597 C627.522847,399.890597 632,404.36775 632,409.890597 L632,429.890597 Z M632,489.890597 C632,495.413445 627.522847,499.890597 622,499.890597 C616.477153,499.890597 612,495.413445 612,489.890597 L612,469.890597 C612,464.36775 616.477153,459.890597 622,459.890597 C627.522847,459.890597 632,464.36775 632,469.890597 L632,489.890597 Z M632,549.890597 C632,555.413445 627.522847,559.890597 622,559.890597 C616.477153,559.890597 612,555.413445 612,549.890597 L612,529.890597 C612,524.36775 616.477153,519.890597 622,519.890597 C627.522847,519.890597 632,524.36775 632,529.890597 L632,549.890597 Z M632,609.890597 C632,615.413445 627.522847,619.890597 622,619.890597 C616.477153,619.890597 612,615.413445 612,609.890597 L612,589.890597 C612,584.36775 616.477153,579.890597 622,579.890597 C627.522847,579.890597 632,584.36775 632,589.890597 L632,609.890597 Z M632,669.890597 C632,675.413445 627.522847,679.890597 622,679.890597 C616.477153,679.890597 612,675.413445 612,669.890597 L612,649.890597 C612,644.36775 616.477153,639.890597 622,639.890597 C627.522847,639.890597 632,644.36775 632,649.890597 L632,669.890597 Z M632,729.890597 C632,735.413445 627.522847,739.890597 622,739.890597 C616.477153,739.890597 612,735.413445 612,729.890597 L612,709.890597 C612,704.36775 616.477153,699.890597 622,699.890597 C627.522847,699.890597 632,704.36775 632,709.890597 L632,729.890597 Z M632,789.890597 C632,795.413445 627.522847,799.890597 622,799.890597 C616.477153,799.890597 612,795.413445 612,789.890597 L612,769.890597 C612,764.36775 616.477153,759.890597 622,759.890597 C627.522847,759.890597 632,764.36775 632,769.890597 L632,789.890597 Z M632,849.890597 C632,855.413445 627.522847,859.890597 622,859.890597 C616.477153,859.890597 612,855.413445 612,849.890597 L612,829.890597 C612,824.36775 616.477153,819.890597 622,819.890597 C627.522847,819.890597 632,824.36775 632,829.890597 L632,849.890597 Z M632,909.890597 C632,915.413445 627.522847,919.890597 622,919.890597 C616.477153,919.890597 612,915.413445 612,909.890597 L612,889.890597 C612,884.36775 616.477153,879.890597 622,879.890597 C627.522847,879.890597 632,884.36775 632,889.890597 L632,909.890597 Z M632,969.890597 C632,975.413445 627.522847,979.890597 622,979.890597 C616.477153,979.890597 612,975.413445 612,969.890597 L612,949.890597 C612,944.36775 616.477153,939.890597 622,939.890597 C627.522847,939.890597 632,944.36775 632,949.890597 L632,969.890597 Z M632,1029.8906 C632,1035.41345 627.522847,1039.8906 622,1039.8906 C616.477153,1039.8906 612,1035.41345 612,1029.8906 L612,1009.8906 C612,1004.36775 616.477153,999.890597 622,999.890597 C627.522847,999.890597 632,1004.36775 632,1009.8906 L632,1029.8906 Z M625.582572,1093.31353 C623.267558,1098.32777 617.326028,1100.51592 612.311793,1098.20091 C607.38401,1095.92581 605.1857,1090.14816 607.308686,1085.19029 L607.424421,1084.93013 C609.641243,1080.12857 611.082691,1074.9944 611.682313,1069.67576 L611.762239,1068.91471 C612.297205,1063.41784 617.18698,1059.39541 622.683857,1059.93038 C628.180734,1060.46535 632.203157,1065.35512 631.668191,1070.852 C630.906019,1078.68346 628.840608,1086.25675 625.582572,1093.31353 Z M571.638325,1133.34066 C566.167253,1134.09512 561.120459,1130.27156 560.365996,1124.80048 C559.624319,1119.42214 563.306801,1114.45382 568.629414,1113.5702 L568.90617,1113.52816 C574.457635,1112.76261 579.790584,1111.0752 584.728948,1108.54962 C589.646067,1106.0349 595.670758,1107.98244 598.185473,1112.89955 C600.700188,1117.81667 598.752655,1123.84136 593.835537,1126.35608 C586.909177,1129.89836 579.422579,1132.26721 571.638325,1133.34066 Z M510.218805,1134 C504.695958,1134 500.218805,1129.52285 500.218805,1124 C500.218805,1118.47715 504.695958,1114 510.218805,1114 L530.218805,1114 C535.741653,1114 540.218805,1118.47715 540.218805,1124 C540.218805,1129.52285 535.741653,1134 530.218805,1134 L510.218805,1134 Z M448.334497,1132.66485 C442.916888,1131.59184 439.394893,1126.33015 440.467902,1120.91254 C441.540911,1115.49493 446.802597,1111.97294 452.220207,1113.04595 C455.413744,1113.67846 458.683351,1114 462,1114 L470.218805,1114 C475.741653,1114 480.218805,1118.47715 480.218805,1124 C480.218805,1129.52285 475.741653,1134 470.218805,1134 L462,1134 C457.377019,1134 452.806019,1133.55048 448.334497,1132.66485 Z M396.788592,1089.48971 C394.776845,1084.3463 397.315564,1078.54589 402.458979,1076.53415 C407.513715,1074.55709 413.20298,1076.97493 415.307134,1081.94083 L415.414546,1082.20453 C417.444377,1087.39419 420.335633,1092.20621 423.955544,1096.44587 C427.541718,1100.64601 427.043997,1106.95807 422.843853,1110.54424 C418.64371,1114.13042 412.331653,1113.63269 408.74548,1109.43255 C403.682413,1103.50266 399.634218,1096.7651 396.788592,1089.48971 Z M392,1026.32821 C392,1020.80536 396.477153,1016.32821 402,1016.32821 C407.522847,1016.32821 412,1020.80536 412,1026.32821 L412,1046.32821 C412,1051.85106 407.522847,1056.32821 402,1056.32821 C396.477153,1056.32821 392,1051.85106 392,1046.32821 L392,1026.32821 Z M392,966.328208 C392,960.805361 396.477153,956.328208 402,956.328208 C407.522847,956.328208 412,960.805361 412,966.328208 L412,986.328208 C412,991.851056 407.522847,996.328208 402,996.328208 C396.477153,996.328208 392,991.851056 392,986.328208 L392,966.328208 Z M392,906.328208 C392,900.805361 396.477153,896.328208 402,896.328208 C407.522847,896.328208 412,900.805361 412,906.328208 L412,926.328208 C412,931.851056 407.522847,936.328208 402,936.328208 C396.477153,936.328208 392,931.851056 392,926.328208 L392,906.328208 Z M392,846.328208 C392,840.805361 396.477153,836.328208 402,836.328208 C407.522847,836.328208 412,840.805361 412,846.328208 L412,866.328208 C412,871.851056 407.522847,876.328208 402,876.328208 C396.477153,876.328208 392,871.851056 392,866.328208 L392,846.328208 Z M392,786.328208 C392,780.805361 396.477153,776.328208 402,776.328208 C407.522847,776.328208 412,780.805361 412,786.328208 L412,806.328208 C412,811.851056 407.522847,816.328208 402,816.328208 C396.477153,816.328208 392,811.851056 392,806.328208 L392,786.328208 Z M392,726.328208 C392,720.805361 396.477153,716.328208 402,716.328208 C407.522847,716.328208 412,720.805361 412,726.328208 L412,746.328208 C412,751.851056 407.522847,756.328208 402,756.328208 C396.477153,756.328208 392,751.851056 392,746.328208 L392,726.328208 Z M392,666.328208 C392,660.805361 396.477153,656.328208 402,656.328208 C407.522847,656.328208 412,660.805361 412,666.328208 L412,686.328208 C412,691.851056 407.522847,696.328208 402,696.328208 C396.477153,696.328208 392,691.851056 392,686.328208 L392,666.328208 Z M392,606.328208 C392,600.805361 396.477153,596.328208 402,596.328208 C407.522847,596.328208 412,600.805361 412,606.328208 L412,626.328208 C412,631.851056 407.522847,636.328208 402,636.328208 C396.477153,636.328208 392,631.851056 392,626.328208 L392,606.328208 Z M392,546.328208 C392,540.805361 396.477153,536.328208 402,536.328208 C407.522847,536.328208 412,540.805361 412,546.328208 L412,566.328208 C412,571.851056 407.522847,576.328208 402,576.328208 C396.477153,576.328208 392,571.851056 392,566.328208 L392,546.328208 Z M392,486.328208 C392,480.805361 396.477153,476.328208 402,476.328208 C407.522847,476.328208 412,480.805361 412,486.328208 L412,506.328208 C412,511.851056 407.522847,516.328208 402,516.328208 C396.477153,516.328208 392,511.851056 392,506.328208 L392,486.328208 Z M392,426.328208 C392,420.805361 396.477153,416.328208 402,416.328208 C407.522847,416.328208 412,420.805361 412,426.328208 L412,446.328208 C412,451.851056 407.522847,456.328208 402,456.328208 C396.477153,456.328208 392,451.851056 392,446.328208 L392,426.328208 Z M395.003353,363.661096 C396.606034,358.375904 402.189758,355.390638 407.474951,356.993319 C412.670564,358.568836 415.643552,363.991589 414.220277,369.195942 L414.142728,369.464917 C412.727567,374.131721 412,379.011384 412,384 L412,386.328208 C412,391.851056 407.522847,396.328208 402,396.328208 C396.477153,396.328208 392,391.851056 392,386.328208 L392,384 C392,377.03958 393.019114,370.20456 395.003353,363.661096 Z M443.077691,316.590148 C448.395706,315.099992 453.914819,318.203084 455.404975,323.521099 C456.869874,328.748978 453.895909,334.171196 448.742512,335.76916 L448.474024,335.848383 C443.345681,337.285392 438.496997,339.536467 434.09376,342.504765 L433.467775,342.933676 C428.935521,346.089705 422.702936,344.974054 419.546907,340.4418 C416.390878,335.909546 417.506528,329.676962 422.038782,326.520933 C428.435844,322.066347 435.539059,318.702542 443.077691,316.590148 Z M505.562389,314 C511.085237,314 515.562389,318.477153 515.562389,324 C515.562389,329.522847 511.085237,334 505.562389,334 L485.562389,334 C480.039542,334 475.562389,329.522847 475.562389,324 C475.562389,318.477153 480.039542,314 485.562389,314 L505.562389,314 Z M562,314 C567.522847,314 572,318.477153 572,324 C572,329.522847 567.522847,334 562,334 L545.562389,334 C540.039542,334 535.562389,329.522847 535.562389,324 C535.562389,318.477153 540.039542,314 545.562389,314 L562,314 Z"
                id="形状备份-2"
                fill="#999999"
                transform="translate(512.000000, 724.000000) rotate(-270.000000) translate(-512.000000, -724.000000) "
              ></path>
            </g>
          </g>
        ),
        elements: [
          {
            componentName: 'Field',
            props: {
              type: 'void',
              'x-component': 'Navbar',
              'x-component-props': {
                logo: '//via.placeholder.com/100x50?text=Logo',
                title: 'Title',
                contentAlign: 'left',
              },
            },
          },
        ],
      },
      {
        icon: (
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill-rule="nonzero">
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
                transform="translate(251.000000, 292.000000) scale(-1, 1) rotate(-90.000000) translate(-251.000000, -292.000000) "
                x="241"
                y="192"
                width="20"
                height="200"
                rx="10"
              ></rect>
              <rect
                id="矩形"
                fill="#1890FF"
                transform="translate(649.000000, 292.000000) scale(-1, 1) rotate(-90.000000) translate(-649.000000, -292.000000) "
                x="639"
                y="68"
                width="20"
                height="448"
                rx="10"
              ></rect>
              <rect
                id="矩形"
                fill="#1890FF"
                transform="translate(251.000000, 512.000000) scale(-1, 1) rotate(-90.000000) translate(-251.000000, -512.000000) "
                x="241"
                y="412"
                width="20"
                height="200"
                rx="10"
              ></rect>
              <rect
                id="矩形"
                fill="#1890FF"
                transform="translate(649.000000, 512.000000) scale(-1, 1) rotate(-90.000000) translate(-649.000000, -512.000000) "
                x="639"
                y="288"
                width="20"
                height="448"
                rx="10"
              ></rect>
              <rect
                id="矩形"
                fill="#1890FF"
                transform="translate(251.000000, 732.000000) scale(-1, 1) rotate(-90.000000) translate(-251.000000, -732.000000) "
                x="241"
                y="632"
                width="20"
                height="200"
                rx="10"
              ></rect>
              <rect
                id="矩形"
                fill="#1890FF"
                transform="translate(649.000000, 732.000000) scale(-1, 1) rotate(-90.000000) translate(-649.000000, -732.000000) "
                x="639"
                y="508"
                width="20"
                height="448"
                rx="10"
              ></rect>
            </g>
          </g>
        ),
        elements: [
          {
            componentName: 'Field',
            props: {
              type: 'string | number',
              enum: [
                {
                  key: 1,
                  text: 'Open Link',
                  linkUrl: 'javascript:;',
                },
                {
                  key: 2,
                  text: 'Replace Item',
                  linkUrl: 'javascript:;',
                  replace: true,
                },
                {
                  key: 3,
                  text: 'Item',
                  children: [
                    {
                      key: 31,
                      text: 'SubItem1',
                      linkUrl: 'javascript:;',
                    },
                    {
                      key: 32,
                      text: 'SubItem2',
                      linkUrl: 'javascript:;',
                    },
                  ],
                },
              ],
              'x-component': 'Navbar.Menu',
              'x-component-props': {},
            },
          },
        ],
      }
    ),
  }
)
