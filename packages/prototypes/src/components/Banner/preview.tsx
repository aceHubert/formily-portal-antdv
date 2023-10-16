import { Banner as FormilyBannner } from '@formily-portal/antdv'
import { composeExport } from '@formily/antdv/esm/__builtins__'
import { createBehavior, createResource } from '@designable/core'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { createFieldSchema } from '../Field'

export const Banner = composeExport(FormilyBannner, {
  Behavior: createBehavior({
    name: 'Banner',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Banner',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.Banner),
    },
    designerLocales: AllLocales.Banner,
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
        <g id="横幅" fill-rule="nonzero">
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
            fill="#999999"
            transform="translate(512.000000, 329.000000) scale(-1, 1) rotate(-90.000000) translate(-512.000000, -329.000000) "
            x="502"
            y="124"
            width="20"
            height="410"
            rx="10"
          ></rect>
          <rect
            id="矩形备份-15"
            fill="#1890FF"
            transform="translate(512.000000, 447.000000) scale(-1, 1) rotate(-90.000000) translate(-512.000000, -447.000000) "
            x="502"
            y="337"
            width="20"
            height="220"
            rx="10"
          ></rect>
          <rect
            id="矩形备份-16"
            fill="#1890FF"
            transform="translate(512.000000, 577.000000) scale(-1, 1) rotate(-90.000000) translate(-512.000000, -577.000000) "
            x="502"
            y="467"
            width="20"
            height="220"
            rx="10"
          ></rect>
          <rect
            id="矩形备份-13"
            fill="#999999"
            transform="translate(512.000000, 695.000000) scale(-1, 1) rotate(-90.000000) translate(-512.000000, -695.000000) "
            x="502"
            y="490"
            width="20"
            height="410"
            rx="10"
          ></rect>
          <path
            d="M193.34986,839.168716 L193.620181,839.258187 C198.599318,840.983667 203.847281,841.913271 209.23012,841.994215 L210,842 L226.437611,842 C231.960458,842 236.437611,846.477153 236.437611,852 C236.437611,857.522847 231.960458,862 226.437611,862 L210,862 C202.111037,862 194.386842,860.690741 187.071419,858.155639 C181.853031,856.347249 179.088683,850.650919 180.897073,845.432532 C182.674285,840.304117 188.206524,837.545848 193.34986,839.168716 Z M141.911731,808.306637 C140.629258,802.934756 143.944378,797.540336 149.316259,796.257863 C154.68814,794.97539 160.08256,798.29051 161.365033,803.662391 C162.661799,809.094138 164.861846,814.245263 167.862048,818.928348 C170.841292,823.578719 169.486576,829.763744 164.836205,832.742988 C160.185834,835.722232 154.000809,834.367516 151.021565,829.717145 C146.818,823.155702 143.731489,815.929037 141.911731,808.306637 Z M140,746.109403 C140,740.586555 144.477153,736.109403 150,736.109403 C155.522847,736.109403 160,740.586555 160,746.109403 L160,766.109403 C160,771.63225 155.522847,776.109403 150,776.109403 C144.477153,776.109403 140,771.63225 140,766.109403 L140,746.109403 Z M140,686.109403 C140,680.586555 144.477153,676.109403 150,676.109403 C155.522847,676.109403 160,680.586555 160,686.109403 L160,706.109403 C160,711.63225 155.522847,716.109403 150,716.109403 C144.477153,716.109403 140,711.63225 140,706.109403 L140,686.109403 Z M140,626.109403 C140,620.586555 144.477153,616.109403 150,616.109403 C155.522847,616.109403 160,620.586555 160,626.109403 L160,646.109403 C160,651.63225 155.522847,656.109403 150,656.109403 C144.477153,656.109403 140,651.63225 140,646.109403 L140,626.109403 Z M140,566.109403 C140,560.586555 144.477153,556.109403 150,556.109403 C155.522847,556.109403 160,560.586555 160,566.109403 L160,586.109403 C160,591.63225 155.522847,596.109403 150,596.109403 C144.477153,596.109403 140,591.63225 140,586.109403 L140,566.109403 Z M140,506.109403 C140,500.586555 144.477153,496.109403 150,496.109403 C155.522847,496.109403 160,500.586555 160,506.109403 L160,526.109403 C160,531.63225 155.522847,536.109403 150,536.109403 C144.477153,536.109403 140,531.63225 140,526.109403 L140,506.109403 Z M140,446.109403 C140,440.586555 144.477153,436.109403 150,436.109403 C155.522847,436.109403 160,440.586555 160,446.109403 L160,466.109403 C160,471.63225 155.522847,476.109403 150,476.109403 C144.477153,476.109403 140,471.63225 140,466.109403 L140,446.109403 Z M140,386.109403 C140,380.586555 144.477153,376.109403 150,376.109403 C155.522847,376.109403 160,380.586555 160,386.109403 L160,406.109403 C160,411.63225 155.522847,416.109403 150,416.109403 C144.477153,416.109403 140,411.63225 140,406.109403 L140,386.109403 Z M140,326.109403 C140,320.586555 144.477153,316.109403 150,316.109403 C155.522847,316.109403 160,320.586555 160,326.109403 L160,346.109403 C160,351.63225 155.522847,356.109403 150,356.109403 C144.477153,356.109403 140,351.63225 140,346.109403 L140,326.109403 Z M140,266.109403 C140,260.586555 144.477153,256.109403 150,256.109403 C155.522847,256.109403 160,260.586555 160,266.109403 L160,286.109403 C160,291.63225 155.522847,296.109403 150,296.109403 C144.477153,296.109403 140,291.63225 140,286.109403 L140,266.109403 Z M146.417428,202.686467 C148.732442,197.672232 154.673972,195.484081 159.688207,197.799095 C164.61599,200.074195 166.8143,205.851837 164.691314,210.809714 L164.575579,211.069874 C162.358757,215.871431 160.917309,221.005596 160.317687,226.324241 L160.237761,227.085286 C159.702795,232.582163 154.81302,236.604586 149.316143,236.06962 C143.819266,235.534654 139.796843,230.644879 140.331809,225.148002 C141.093981,217.316544 143.159392,209.743252 146.417428,202.686467 Z M200.361675,162.659341 C205.832747,161.904877 210.879541,165.728444 211.634004,171.199516 C212.375681,176.577858 208.693199,181.546182 203.370586,182.429803 L203.09383,182.471845 C197.542365,183.237395 192.209416,184.924802 187.271052,187.450382 C182.353933,189.965097 176.329242,188.017564 173.814527,183.100446 C171.299812,178.183327 173.247345,172.158636 178.164463,169.643921 C185.090823,166.101639 192.577421,163.732794 200.361675,162.659341 Z M261.665503,163.335152 C267.083112,164.408161 270.605107,169.669847 269.532098,175.087456 C268.459089,180.505066 263.197403,184.027061 257.779793,182.954052 C254.586256,182.321542 251.316649,182 248,182 L239.781195,182 C234.258347,182 229.781195,177.522847 229.781195,172 C229.781195,166.477153 234.258347,162 239.781195,162 L248,162 C252.622981,162 257.193981,162.449524 261.665503,163.335152 Z M313.211408,206.510287 C315.223155,211.653702 312.684436,217.454107 307.541021,219.465854 C302.486285,221.442915 296.79702,219.025071 294.692866,214.059173 L294.585454,213.795467 C292.555623,208.605815 289.664367,203.793789 286.044456,199.554132 C282.458282,195.353989 282.956003,189.041932 287.156147,185.455758 C291.35629,181.869585 297.668347,182.367306 301.25452,186.567449 C306.317587,192.497336 310.365782,199.2349 313.211408,206.510287 Z M318,269.671792 C318,275.194639 313.522847,279.671792 308,279.671792 C302.477153,279.671792 298,275.194639 298,269.671792 L298,249.671792 C298,244.148944 302.477153,239.671792 308,239.671792 C313.522847,239.671792 318,244.148944 318,249.671792 L318,269.671792 Z M318,329.671792 C318,335.194639 313.522847,339.671792 308,339.671792 C302.477153,339.671792 298,335.194639 298,329.671792 L298,309.671792 C298,304.148944 302.477153,299.671792 308,299.671792 C313.522847,299.671792 318,304.148944 318,309.671792 L318,329.671792 Z M318,389.671792 C318,395.194639 313.522847,399.671792 308,399.671792 C302.477153,399.671792 298,395.194639 298,389.671792 L298,369.671792 C298,364.148944 302.477153,359.671792 308,359.671792 C313.522847,359.671792 318,364.148944 318,369.671792 L318,389.671792 Z M318,449.671792 C318,455.194639 313.522847,459.671792 308,459.671792 C302.477153,459.671792 298,455.194639 298,449.671792 L298,429.671792 C298,424.148944 302.477153,419.671792 308,419.671792 C313.522847,419.671792 318,424.148944 318,429.671792 L318,449.671792 Z M318,509.671792 C318,515.194639 313.522847,519.671792 308,519.671792 C302.477153,519.671792 298,515.194639 298,509.671792 L298,489.671792 C298,484.148944 302.477153,479.671792 308,479.671792 C313.522847,479.671792 318,484.148944 318,489.671792 L318,509.671792 Z M318,569.671792 C318,575.194639 313.522847,579.671792 308,579.671792 C302.477153,579.671792 298,575.194639 298,569.671792 L298,549.671792 C298,544.148944 302.477153,539.671792 308,539.671792 C313.522847,539.671792 318,544.148944 318,549.671792 L318,569.671792 Z M318,629.671792 C318,635.194639 313.522847,639.671792 308,639.671792 C302.477153,639.671792 298,635.194639 298,629.671792 L298,609.671792 C298,604.148944 302.477153,599.671792 308,599.671792 C313.522847,599.671792 318,604.148944 318,609.671792 L318,629.671792 Z M318,689.671792 C318,695.194639 313.522847,699.671792 308,699.671792 C302.477153,699.671792 298,695.194639 298,689.671792 L298,669.671792 C298,664.148944 302.477153,659.671792 308,659.671792 C313.522847,659.671792 318,664.148944 318,669.671792 L318,689.671792 Z M318,749.671792 C318,755.194639 313.522847,759.671792 308,759.671792 C302.477153,759.671792 298,755.194639 298,749.671792 L298,729.671792 C298,724.148944 302.477153,719.671792 308,719.671792 C313.522847,719.671792 318,724.148944 318,729.671792 L318,749.671792 Z M314.996647,812.338904 C313.393966,817.624096 307.810242,820.609362 302.525049,819.006681 C297.329436,817.431164 294.356448,812.008411 295.779723,806.804058 L295.857272,806.535083 C297.272433,801.868279 298,796.988616 298,792 L298,789.671792 C298,784.148944 302.477153,779.671792 308,779.671792 C313.522847,779.671792 318,784.148944 318,789.671792 L318,792 C318,798.96042 316.980886,805.79544 314.996647,812.338904 Z M266.922309,859.409852 C261.604294,860.900008 256.085181,857.796916 254.595025,852.478901 C253.130126,847.251022 256.104091,841.828804 261.257488,840.23084 L261.525976,840.151617 C266.654319,838.714608 271.503003,836.463533 275.90624,833.495235 L276.532225,833.066324 C281.064479,829.910295 287.297064,831.025946 290.453093,835.5582 C293.609122,840.090454 292.493472,846.323038 287.961218,849.479067 C281.564156,853.933653 274.460941,857.297458 266.922309,859.409852 Z"
            id="形状结合"
            fill="#999999"
          ></path>
          <path
            d="M759.34986,839.168716 L759.620181,839.258187 C764.599318,840.983667 769.847281,841.913271 775.23012,841.994215 L776,842 L792.437611,842 C797.960458,842 802.437611,846.477153 802.437611,852 C802.437611,857.522847 797.960458,862 792.437611,862 L776,862 C768.111037,862 760.386842,860.690741 753.071419,858.155639 C747.853031,856.347249 745.088683,850.650919 746.897073,845.432532 C748.674285,840.304117 754.206524,837.545848 759.34986,839.168716 Z M707.911731,808.306637 C706.629258,802.934756 709.944378,797.540336 715.316259,796.257863 C720.68814,794.97539 726.08256,798.29051 727.365033,803.662391 C728.661799,809.094138 730.861846,814.245263 733.862048,818.928348 C736.841292,823.578719 735.486576,829.763744 730.836205,832.742988 C726.185834,835.722232 720.000809,834.367516 717.021565,829.717145 C712.818,823.155702 709.731489,815.929037 707.911731,808.306637 Z M706,746.109403 C706,740.586555 710.477153,736.109403 716,736.109403 C721.522847,736.109403 726,740.586555 726,746.109403 L726,766.109403 C726,771.63225 721.522847,776.109403 716,776.109403 C710.477153,776.109403 706,771.63225 706,766.109403 L706,746.109403 Z M706,686.109403 C706,680.586555 710.477153,676.109403 716,676.109403 C721.522847,676.109403 726,680.586555 726,686.109403 L726,706.109403 C726,711.63225 721.522847,716.109403 716,716.109403 C710.477153,716.109403 706,711.63225 706,706.109403 L706,686.109403 Z M706,626.109403 C706,620.586555 710.477153,616.109403 716,616.109403 C721.522847,616.109403 726,620.586555 726,626.109403 L726,646.109403 C726,651.63225 721.522847,656.109403 716,656.109403 C710.477153,656.109403 706,651.63225 706,646.109403 L706,626.109403 Z M706,566.109403 C706,560.586555 710.477153,556.109403 716,556.109403 C721.522847,556.109403 726,560.586555 726,566.109403 L726,586.109403 C726,591.63225 721.522847,596.109403 716,596.109403 C710.477153,596.109403 706,591.63225 706,586.109403 L706,566.109403 Z M706,506.109403 C706,500.586555 710.477153,496.109403 716,496.109403 C721.522847,496.109403 726,500.586555 726,506.109403 L726,526.109403 C726,531.63225 721.522847,536.109403 716,536.109403 C710.477153,536.109403 706,531.63225 706,526.109403 L706,506.109403 Z M706,446.109403 C706,440.586555 710.477153,436.109403 716,436.109403 C721.522847,436.109403 726,440.586555 726,446.109403 L726,466.109403 C726,471.63225 721.522847,476.109403 716,476.109403 C710.477153,476.109403 706,471.63225 706,466.109403 L706,446.109403 Z M706,386.109403 C706,380.586555 710.477153,376.109403 716,376.109403 C721.522847,376.109403 726,380.586555 726,386.109403 L726,406.109403 C726,411.63225 721.522847,416.109403 716,416.109403 C710.477153,416.109403 706,411.63225 706,406.109403 L706,386.109403 Z M706,326.109403 C706,320.586555 710.477153,316.109403 716,316.109403 C721.522847,316.109403 726,320.586555 726,326.109403 L726,346.109403 C726,351.63225 721.522847,356.109403 716,356.109403 C710.477153,356.109403 706,351.63225 706,346.109403 L706,326.109403 Z M706,266.109403 C706,260.586555 710.477153,256.109403 716,256.109403 C721.522847,256.109403 726,260.586555 726,266.109403 L726,286.109403 C726,291.63225 721.522847,296.109403 716,296.109403 C710.477153,296.109403 706,291.63225 706,286.109403 L706,266.109403 Z M712.417428,202.686467 C714.732442,197.672232 720.673972,195.484081 725.688207,197.799095 C730.61599,200.074195 732.8143,205.851837 730.691314,210.809714 L730.575579,211.069874 C728.358757,215.871431 726.917309,221.005596 726.317687,226.324241 L726.237761,227.085286 C725.702795,232.582163 720.81302,236.604586 715.316143,236.06962 C709.819266,235.534654 705.796843,230.644879 706.331809,225.148002 C707.093981,217.316544 709.159392,209.743252 712.417428,202.686467 Z M766.361675,162.659341 C771.832747,161.904877 776.879541,165.728444 777.634004,171.199516 C778.375681,176.577858 774.693199,181.546182 769.370586,182.429803 L769.09383,182.471845 C763.542365,183.237395 758.209416,184.924802 753.271052,187.450382 C748.353933,189.965097 742.329242,188.017564 739.814527,183.100446 C737.299812,178.183327 739.247345,172.158636 744.164463,169.643921 C751.090823,166.101639 758.577421,163.732794 766.361675,162.659341 Z M827.665503,163.335152 C833.083112,164.408161 836.605107,169.669847 835.532098,175.087456 C834.459089,180.505066 829.197403,184.027061 823.779793,182.954052 C820.586256,182.321542 817.316649,182 814,182 L805.781195,182 C800.258347,182 795.781195,177.522847 795.781195,172 C795.781195,166.477153 800.258347,162 805.781195,162 L814,162 C818.622981,162 823.193981,162.449524 827.665503,163.335152 Z M879.211408,206.510287 C881.223155,211.653702 878.684436,217.454107 873.541021,219.465854 C868.486285,221.442915 862.79702,219.025071 860.692866,214.059173 L860.585454,213.795467 C858.555623,208.605815 855.664367,203.793789 852.044456,199.554132 C848.458282,195.353989 848.956003,189.041932 853.156147,185.455758 C857.35629,181.869585 863.668347,182.367306 867.25452,186.567449 C872.317587,192.497336 876.365782,199.2349 879.211408,206.510287 Z M884,269.671792 C884,275.194639 879.522847,279.671792 874,279.671792 C868.477153,279.671792 864,275.194639 864,269.671792 L864,249.671792 C864,244.148944 868.477153,239.671792 874,239.671792 C879.522847,239.671792 884,244.148944 884,249.671792 L884,269.671792 Z M884,329.671792 C884,335.194639 879.522847,339.671792 874,339.671792 C868.477153,339.671792 864,335.194639 864,329.671792 L864,309.671792 C864,304.148944 868.477153,299.671792 874,299.671792 C879.522847,299.671792 884,304.148944 884,309.671792 L884,329.671792 Z M884,389.671792 C884,395.194639 879.522847,399.671792 874,399.671792 C868.477153,399.671792 864,395.194639 864,389.671792 L864,369.671792 C864,364.148944 868.477153,359.671792 874,359.671792 C879.522847,359.671792 884,364.148944 884,369.671792 L884,389.671792 Z M884,449.671792 C884,455.194639 879.522847,459.671792 874,459.671792 C868.477153,459.671792 864,455.194639 864,449.671792 L864,429.671792 C864,424.148944 868.477153,419.671792 874,419.671792 C879.522847,419.671792 884,424.148944 884,429.671792 L884,449.671792 Z M884,509.671792 C884,515.194639 879.522847,519.671792 874,519.671792 C868.477153,519.671792 864,515.194639 864,509.671792 L864,489.671792 C864,484.148944 868.477153,479.671792 874,479.671792 C879.522847,479.671792 884,484.148944 884,489.671792 L884,509.671792 Z M884,569.671792 C884,575.194639 879.522847,579.671792 874,579.671792 C868.477153,579.671792 864,575.194639 864,569.671792 L864,549.671792 C864,544.148944 868.477153,539.671792 874,539.671792 C879.522847,539.671792 884,544.148944 884,549.671792 L884,569.671792 Z M884,629.671792 C884,635.194639 879.522847,639.671792 874,639.671792 C868.477153,639.671792 864,635.194639 864,629.671792 L864,609.671792 C864,604.148944 868.477153,599.671792 874,599.671792 C879.522847,599.671792 884,604.148944 884,609.671792 L884,629.671792 Z M884,689.671792 C884,695.194639 879.522847,699.671792 874,699.671792 C868.477153,699.671792 864,695.194639 864,689.671792 L864,669.671792 C864,664.148944 868.477153,659.671792 874,659.671792 C879.522847,659.671792 884,664.148944 884,669.671792 L884,689.671792 Z M884,749.671792 C884,755.194639 879.522847,759.671792 874,759.671792 C868.477153,759.671792 864,755.194639 864,749.671792 L864,729.671792 C864,724.148944 868.477153,719.671792 874,719.671792 C879.522847,719.671792 884,724.148944 884,729.671792 L884,749.671792 Z M880.996647,812.338904 C879.393966,817.624096 873.810242,820.609362 868.525049,819.006681 C863.329436,817.431164 860.356448,812.008411 861.779723,806.804058 L861.857272,806.535083 C863.272433,801.868279 864,796.988616 864,792 L864,789.671792 C864,784.148944 868.477153,779.671792 874,779.671792 C879.522847,779.671792 884,784.148944 884,789.671792 L884,792 C884,798.96042 882.980886,805.79544 880.996647,812.338904 Z M832.922309,859.409852 C827.604294,860.900008 822.085181,857.796916 820.595025,852.478901 C819.130126,847.251022 822.104091,841.828804 827.257488,840.23084 L827.525976,840.151617 C832.654319,838.714608 837.503003,836.463533 841.90624,833.495235 L842.532225,833.066324 C847.064479,829.910295 853.297064,831.025946 856.453093,835.5582 C859.609122,840.090454 858.493472,846.323038 853.961218,849.479067 C847.564156,853.933653 840.460941,857.297458 832.922309,859.409852 Z"
            id="形状结合备份-2"
            fill="#999999"
          ></path>
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
              imageUrl:
                '//via.placeholder.com/1920x300/FF0000/FFFFFF?text=Image1',
              linkUrl: 'javascript:;',
              linkTarget: '_blank',
            },
            {
              key: 2,
              imageUrl:
                '//via.placeholder.com/1920x300/008000/FFFFFF?text=Image2',
            },
            {
              key: 3,
              imageUrl:
                '//via.placeholder.com/1920x300/0000FF/FFFFFF?text=Image3',
            },
          ],
          'x-component': 'Banner',
          'x-component-props': {},
        },
      },
    ],
  }),
})
