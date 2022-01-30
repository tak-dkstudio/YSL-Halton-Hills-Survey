var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior-corridor-1",
      "name": "Exterior Corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.018875515826490386,
        "pitch": -0.0867613800485234,
        "fov": 1.3299344168618967
      },
      "linkHotspots": [
        {
          "yaw": -0.184846215602132,
          "pitch": 0.12024699592798704,
          "rotation": 0,
          "target": "1-exterior-entrance"
        },
        {
          "yaw": 1.0715678987488335,
          "pitch": 0.08747068246740852,
          "rotation": 0,
          "target": "4-exterior-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-exterior-entrance",
      "name": "Exterior Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0964417930913637,
          "pitch": 0.18598875258192038,
          "rotation": 0,
          "target": "0-exterior-corridor-1"
        },
        {
          "yaw": 2.5832445580268626,
          "pitch": 0.27346049379615955,
          "rotation": 0,
          "target": "3-exterior-right"
        },
        {
          "yaw": -0.5610386984747215,
          "pitch": 0.24364742078813073,
          "rotation": 0,
          "target": "2-exterior-left"
        },
        {
          "yaw": 1.0687381199086659,
          "pitch": 0.1642662052955579,
          "rotation": 0,
          "target": "9-interior-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-exterior-left",
      "name": "Exterior Left",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0419176043805027,
          "pitch": 0.4845396510617803,
          "rotation": 0,
          "target": "1-exterior-entrance"
        },
        {
          "yaw": -1.813547774428855,
          "pitch": 0.09971226691567381,
          "rotation": 0,
          "target": "0-exterior-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-exterior-right",
      "name": "Exterior Right",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6697985923579886,
          "pitch": 0.3253875463983249,
          "rotation": 0,
          "target": "1-exterior-entrance"
        },
        {
          "yaw": 2.865507827256266,
          "pitch": 0.22460594587894,
          "rotation": 0,
          "target": "4-exterior-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-exterior-corridor-2",
      "name": "Exterior Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.22136119531563736,
          "pitch": 0.29437071593370057,
          "rotation": 0,
          "target": "3-exterior-right"
        },
        {
          "yaw": 1.952740227106747,
          "pitch": 0.2825582443556005,
          "rotation": 0,
          "target": "5-exterior-corridor-3"
        },
        {
          "yaw": -0.9627143915696443,
          "pitch": 0.08266166781417539,
          "rotation": 0,
          "target": "0-exterior-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-exterior-corridor-3",
      "name": "Exterior Corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.365554615409426,
          "pitch": 0.19517338233903203,
          "rotation": 0,
          "target": "4-exterior-corridor-2"
        },
        {
          "yaw": 1.409837773182998,
          "pitch": 0.135890772088473,
          "rotation": 0,
          "target": "6-exterior-corridor-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-exterior-corridor-4",
      "name": "Exterior Corridor 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.528781737820914,
          "pitch": 0.1559201307875142,
          "rotation": 0,
          "target": "5-exterior-corridor-3"
        },
        {
          "yaw": -0.045843542455695996,
          "pitch": -0.006888472317847061,
          "rotation": 0,
          "target": "7-exterior-corridor-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-exterior-corridor-5",
      "name": "Exterior Corridor 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9426011252207527,
          "pitch": 0.26059880700380234,
          "rotation": 0,
          "target": "6-exterior-corridor-4"
        },
        {
          "yaw": -1.8947506191500665,
          "pitch": 0.03608716653913646,
          "rotation": 0,
          "target": "8-exterior-corridor-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-exterior-corridor-6",
      "name": "Exterior Corridor 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0650231197514408,
          "pitch": -0.022256815071136415,
          "rotation": 0,
          "target": "7-exterior-corridor-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-interior-entrance",
      "name": "Interior Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1945518082655351,
          "pitch": 0.2686036869098114,
          "rotation": 0,
          "target": "1-exterior-entrance"
        },
        {
          "yaw": -1.4775648989394998,
          "pitch": 0.6911433892241341,
          "rotation": 0,
          "target": "13-foh-1b"
        },
        {
          "yaw": -0.6896995887816288,
          "pitch": 0.36254953581123317,
          "rotation": 6.283185307179586,
          "target": "11-show-window-b"
        },
        {
          "yaw": 0.9978838464915221,
          "pitch": 0.4378384577600496,
          "rotation": 0,
          "target": "10-show-window-a"
        },
        {
          "yaw": 1.8791607658180345,
          "pitch": 0.5986090108641307,
          "rotation": 0,
          "target": "12-foh-1a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-show-window-a",
      "name": "Show window A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0316952356225997,
          "pitch": 0.3036415992753305,
          "rotation": 0,
          "target": "9-interior-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-show-window-b",
      "name": "Show window B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4298371192952857,
          "pitch": 0.4546501570953616,
          "rotation": 0,
          "target": "9-interior-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-foh-1a",
      "name": "FOH 1A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.671557403297582,
          "pitch": 0.6161901784568027,
          "rotation": 0,
          "target": "9-interior-entrance"
        },
        {
          "yaw": -2.297907513772275,
          "pitch": 0.3868434662911042,
          "rotation": 0,
          "target": "14-foh-2a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-foh-1b",
      "name": "FOH 1B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6701516654756503,
          "pitch": 0.6658035599999721,
          "rotation": 0,
          "target": "9-interior-entrance"
        },
        {
          "yaw": 1.9517894700449894,
          "pitch": 0.27263637565757115,
          "rotation": 0,
          "target": "15-foh-2b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-foh-2a",
      "name": "FOH 2A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7777377709123794,
          "pitch": 0.4200244746512851,
          "rotation": 0,
          "target": "12-foh-1a"
        },
        {
          "yaw": 0.18337416982278754,
          "pitch": 0.25716963319968755,
          "rotation": 0,
          "target": "16-foh-3a"
        },
        {
          "yaw": 1.4903901234350014,
          "pitch": 0.33828809840724006,
          "rotation": 0,
          "target": "15-foh-2b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-foh-2b",
      "name": "FOH 2B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.28811343876243356,
          "pitch": 0.19069467052861278,
          "rotation": 0,
          "target": "13-foh-1b"
        },
        {
          "yaw": 1.5667435042643412,
          "pitch": 0.2551174397768676,
          "rotation": 0,
          "target": "14-foh-2a"
        },
        {
          "yaw": -1.9538189403383406,
          "pitch": 0.2033986794169529,
          "rotation": 0,
          "target": "17-foh-3b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-foh-3a",
      "name": "FOH 3A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9315566532030477,
          "pitch": 0.331547290796669,
          "rotation": 0,
          "target": "14-foh-2a"
        },
        {
          "yaw": 0.11952066425948438,
          "pitch": 0.2847235224710829,
          "rotation": 0,
          "target": "18-foh-4a"
        },
        {
          "yaw": 1.7687578222535407,
          "pitch": 0.2405918092168946,
          "rotation": 0,
          "target": "17-foh-3b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-foh-3b",
      "name": "FOH 3B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.023886695994296,
          "pitch": 0.26319613266088737,
          "rotation": 0,
          "target": "16-foh-3a"
        },
        {
          "yaw": -1.5092492151330497,
          "pitch": 0.22039809289749712,
          "rotation": 0,
          "target": "19-foh-4b"
        },
        {
          "yaw": 1.777870692925549,
          "pitch": 0.32531013195621483,
          "rotation": 0,
          "target": "15-foh-2b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-foh-4a",
      "name": "FOH 4A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.736562159016078,
          "pitch": 0.30999415912134864,
          "rotation": 0,
          "target": "16-foh-3a"
        },
        {
          "yaw": 0.243827072117206,
          "pitch": 0.09267061565191526,
          "rotation": 0,
          "target": "20-foh-5a"
        },
        {
          "yaw": 1.8874666560537996,
          "pitch": 0.2151519964912385,
          "rotation": 0,
          "target": "19-foh-4b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-foh-4b",
      "name": "FOH 4B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.427772795437921,
          "pitch": 0.27658260064089646,
          "rotation": 0,
          "target": "17-foh-3b"
        },
        {
          "yaw": -0.7603913353947842,
          "pitch": 0.14898394610347943,
          "rotation": 0,
          "target": "21-foh-5b"
        },
        {
          "yaw": -2.271394271486301,
          "pitch": 0.38894762350665246,
          "rotation": 0,
          "target": "18-foh-4a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-foh-5a",
      "name": "FOH 5A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6615247105603768,
          "pitch": 0.3326972503602832,
          "rotation": 0,
          "target": "18-foh-4a"
        },
        {
          "yaw": 0.3794101207174627,
          "pitch": 0.1668392066787714,
          "rotation": 0,
          "target": "22-boh-entrance"
        },
        {
          "yaw": 1.9580866160957031,
          "pitch": 0.29706383384263546,
          "rotation": 0,
          "target": "21-foh-5b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-foh-5b",
      "name": "FOH 5B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.917711576257844,
          "pitch": 0.1913351793257796,
          "rotation": 0,
          "target": "20-foh-5a"
        },
        {
          "yaw": 1.8214501625878334,
          "pitch": 0.21164020164542663,
          "rotation": 0,
          "target": "19-foh-4b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-boh-entrance",
      "name": "BOH Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0618850444268375,
          "pitch": 0.36649180360798717,
          "rotation": 0,
          "target": "20-foh-5a"
        },
        {
          "yaw": -0.12341485695023557,
          "pitch": 0.16588224741818358,
          "rotation": 0,
          "target": "25-boh-corridor"
        },
        {
          "yaw": 1.533823872925824,
          "pitch": 0.4163232509886168,
          "rotation": 0,
          "target": "23-boh-storage-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-boh-storage-2",
      "name": "BOH Storage 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.19156051668988106,
          "pitch": 0.30428209002619155,
          "rotation": 0,
          "target": "24-boh-storage-3"
        },
        {
          "yaw": -2.965397919391531,
          "pitch": 0.349224672356387,
          "rotation": 0,
          "target": "22-boh-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-boh-storage-3",
      "name": "BOH Storage 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6577731728010168,
          "pitch": 0.5204056118768747,
          "rotation": 0,
          "target": "23-boh-storage-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-boh-corridor",
      "name": "BOH Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6287114393924238,
          "pitch": 0.22961574392829576,
          "rotation": 0,
          "target": "26-boh-exit"
        },
        {
          "yaw": -2.886019982445232,
          "pitch": 0.3953936113958054,
          "rotation": 0,
          "target": "22-boh-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-boh-exit",
      "name": "BOH Exit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.958120525882471,
          "pitch": 0.401576291290036,
          "rotation": 0,
          "target": "25-boh-corridor"
        },
        {
          "yaw": -0.8396940348396402,
          "pitch": 0.26199351821643546,
          "rotation": 0,
          "target": "27-boh-electrical"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-boh-electrical",
      "name": "BOH Electrical",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0612047629489254,
          "pitch": 0.4215568879949352,
          "rotation": 0,
          "target": "29-boh-storage-1"
        },
        {
          "yaw": -1.8282960832243802,
          "pitch": 0.499260905149729,
          "rotation": 0,
          "target": "26-boh-exit"
        },
        {
          "yaw": 1.599887710286346,
          "pitch": 0.39439325021553984,
          "rotation": 0,
          "target": "28-boh-washroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-boh-washroom",
      "name": "BOH Washroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.525158481780263,
          "pitch": 0.2771163308826061,
          "rotation": 0,
          "target": "27-boh-electrical"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-boh-storage-1",
      "name": "BOH Storage 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8486508675025632,
          "pitch": 0.47114280457285673,
          "rotation": 0,
          "target": "27-boh-electrical"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "YSL Halton Hills Expansion Survey",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
