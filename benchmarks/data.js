window.BENCHMARK_DATA = {
  "lastUpdate": 1643081182222,
  "repoUrl": "https://github.com/open-telemetry/opentelemetry-cpp",
  "entries": {
    "OpenTelemetry-cpp api Benchmark": [
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a821fdfa5a7ef3850319483df002f42f6d8b691",
          "message": "Continuous benchmark tests as part of the CI (#1174)",
          "timestamp": "2022-01-21T10:12:39-08:00",
          "tree_id": "be73c679916ac58ef57ef857fd51e17edd33b0c8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/2a821fdfa5a7ef3850319483df002f42f6d8b691"
        },
        "date": 1642789435066,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.9713371225275436,
            "unit": "ns/iter",
            "extra": "iterations: 73631893\ncpu: 1.969711684582114 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.9849431718590052,
            "unit": "ns/iter",
            "extra": "iterations: 70701000\ncpu: 1.982293036873595 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.455751419067383,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 10.303239999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.9770779038620534,
            "unit": "ns/iter",
            "extra": "iterations: 71351395\ncpu: 1.9682264095887683 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 60.024459759060775,
            "unit": "ns/iter",
            "extra": "iterations: 2323050\ncpu: 59.86625341684424 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 345.8781927771802,
            "unit": "ns/iter",
            "extra": "iterations: 404643\ncpu: 345.7282098046921 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1118.4829147396417,
            "unit": "ns/iter",
            "extra": "iterations: 117985\ncpu: 1116.8411238716787 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 273.3894446032108,
            "unit": "ns/iter",
            "extra": "iterations: 584319\ncpu: 253.6340594777854 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1118.3607307388927,
            "unit": "ns/iter",
            "extra": "iterations: 130436\ncpu: 1114.0229691189547 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.41814499500534297,
            "unit": "ms/iter",
            "extra": "iterations: 382\ncpu: 0.12470994764397908 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.24549543422504064,
            "unit": "ms/iter",
            "extra": "iterations: 548\ncpu: 0.24040200729927005 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.11842958047532996,
            "unit": "ms/iter",
            "extra": "iterations: 1217\ncpu: 0.11616318816762534 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.24462128024932753,
            "unit": "ms/iter",
            "extra": "iterations: 562\ncpu: 0.23970320284697513 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12417002871331674,
            "unit": "ms/iter",
            "extra": "iterations: 1139\ncpu: 0.12166707638279192 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.24542747954491478,
            "unit": "ms/iter",
            "extra": "iterations: 551\ncpu: 0.24044936479128864 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.99993371963501,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 6.977584999999992 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 28.528785705566406,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 28.46837999999998 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4174.50993858881,
            "unit": "ns/iter",
            "extra": "iterations: 32956\ncpu: 4168.4458065299195 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.8549879147370685,
            "unit": "ns/iter",
            "extra": "iterations: 76820509\ncpu: 1.8509262936542115 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 85279.2461110723,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 85127.41055184967 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.8639457452441763,
            "unit": "ns/iter",
            "extra": "iterations: 76300515\ncpu: 1.8615510000161863 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 761.6070541831026,
            "unit": "ns/iter",
            "extra": "iterations: 180514\ncpu: 759.6075650642056 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 18769.334008566573,
            "unit": "ns/iter",
            "extra": "iterations: 7352\ncpu: 18746.368335146894 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3131.4073063655583,
            "unit": "ns/iter",
            "extra": "iterations: 44453\ncpu: 3127.9598677254635 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 53809.26044305898,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 53724.92319508448 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a605fd9116723cb33769dafb25a9bb88323a7674",
          "message": "importing gsl::span if std::span is not available (#1167)",
          "timestamp": "2022-01-24T19:14:20-08:00",
          "tree_id": "06217abfa84c48eaac7328bb508b450be04ab671",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/a605fd9116723cb33769dafb25a9bb88323a7674"
        },
        "date": 1643081177795,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.035417355594864,
            "unit": "ns/iter",
            "extra": "iterations: 68957365\ncpu: 2.0305474259348513 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.038682292862635,
            "unit": "ns/iter",
            "extra": "iterations: 68896282\ncpu: 2.0323839826363925 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.785231145489012,
            "unit": "ns/iter",
            "extra": "iterations: 13011031\ncpu: 10.759693063524326 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.414909333857145,
            "unit": "ns/iter",
            "extra": "iterations: 67771668\ncpu: 2.0696303357916475 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 63.50991624204668,
            "unit": "ns/iter",
            "extra": "iterations: 2204547\ncpu: 63.49494930250978 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 378.06999423791956,
            "unit": "ns/iter",
            "extra": "iterations: 370181\ncpu: 378.0639741099623 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1202.9954670102647,
            "unit": "ns/iter",
            "extra": "iterations: 116557\ncpu: 1201.7390632909226 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 276.80890852182966,
            "unit": "ns/iter",
            "extra": "iterations: 506705\ncpu: 276.69867082424685 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1136.069193061752,
            "unit": "ns/iter",
            "extra": "iterations: 123206\ncpu: 1136.011233219161 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4422.375999075199,
            "unit": "ns/iter",
            "extra": "iterations: 31677\ncpu: 4408.447769675158 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.9588533470909715,
            "unit": "ns/iter",
            "extra": "iterations: 72215201\ncpu: 1.940210621306725 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 89800.17535540523,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 89376.65816326531 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.9406738168274502,
            "unit": "ns/iter",
            "extra": "iterations: 72231595\ncpu: 1.9392552524971935 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 811.7549718823063,
            "unit": "ns/iter",
            "extra": "iterations: 175601\ncpu: 810.3404878104338 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 20312.35362848978,
            "unit": "ns/iter",
            "extra": "iterations: 6922\ncpu: 20253.49609939322 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3290.5788329963652,
            "unit": "ns/iter",
            "extra": "iterations: 42655\ncpu: 3273.5576134099174 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 56246.80492336882,
            "unit": "ns/iter",
            "extra": "iterations: 2494\ncpu: 55999.157979150004 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1306999741109697,
            "unit": "ms/iter",
            "extra": "iterations: 1049\ncpu: 0.12661877979027647 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.26043438820089876,
            "unit": "ms/iter",
            "extra": "iterations: 522\ncpu: 0.2510716475095785 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.12984431067178415,
            "unit": "ms/iter",
            "extra": "iterations: 1075\ncpu: 0.12671823255813955 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2552961736536113,
            "unit": "ms/iter",
            "extra": "iterations: 547\ncpu: 0.24882157221206588 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.13323357577697473,
            "unit": "ms/iter",
            "extra": "iterations: 1085\ncpu: 0.12646792626728112 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.25457830677245186,
            "unit": "ms/iter",
            "extra": "iterations: 538\ncpu: 0.24799739776951682 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.3459524857370475,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 7.285089473684202 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 30.41224479675293,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 29.33347999999998 ms\nthreads: 1"
          }
        ]
      }
    ],
    "OpenTelemetry-cpp sdk Benchmark": [
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a821fdfa5a7ef3850319483df002f42f6d8b691",
          "message": "Continuous benchmark tests as part of the CI (#1174)",
          "timestamp": "2022-01-21T10:12:39-08:00",
          "tree_id": "be73c679916ac58ef57ef857fd51e17edd33b0c8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/2a821fdfa5a7ef3850319483df002f42f6d8b691"
        },
        "date": 1642789435730,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9117067037663351,
            "unit": "ns/iter",
            "extra": "iterations: 72271493\ncpu: 1.9066909272235462 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.8227035603326738,
            "unit": "ns/iter",
            "extra": "iterations: 78565616\ncpu: 1.8199297260012577 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 112.56228621339717,
            "unit": "ns/iter",
            "extra": "iterations: 1443818\ncpu: 92.91524277990717 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 438.8554565278875,
            "unit": "ns/iter",
            "extra": "iterations: 387711\ncpu: 370.43700075571775 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 51.876289852983184,
            "unit": "ns/iter",
            "extra": "iterations: 3328475\ncpu: 40.835157241679745 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 53.87171705168634,
            "unit": "ns/iter",
            "extra": "iterations: 3428927\ncpu: 41.210326145759325 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 60.987092738232214,
            "unit": "ns/iter",
            "extra": "iterations: 2978318\ncpu: 45.85611744615579 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 32.56641605784322,
            "unit": "ns/iter",
            "extra": "iterations: 5834987\ncpu: 23.808741990342032 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1165.6672925212822,
            "unit": "ns/iter",
            "extra": "iterations: 156067\ncpu: 895.3000954718168 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1195.5183568188015,
            "unit": "ns/iter",
            "extra": "iterations: 154725\ncpu: 873.373404427208 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 548949.7184753418,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 20026.000000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7803626.06048584,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 356358.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12077944.278717041,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 670090 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 350474.14826183784,
            "unit": "ns/iter",
            "extra": "iterations: 7175\ncpu: 19817.142857142862 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 5015068.054199219,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 358349 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7476060.390472412,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 691420.0000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.8738786763042286,
            "unit": "ns/iter",
            "extra": "iterations: 48762308\ncpu: 2.6293320652500696 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.5740599959019885,
            "unit": "ns/iter",
            "extra": "iterations: 18602105\ncpu: 7.566606037327498 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a605fd9116723cb33769dafb25a9bb88323a7674",
          "message": "importing gsl::span if std::span is not available (#1167)",
          "timestamp": "2022-01-24T19:14:20-08:00",
          "tree_id": "06217abfa84c48eaac7328bb508b450be04ab671",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/a605fd9116723cb33769dafb25a9bb88323a7674"
        },
        "date": 1643081180520,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9495525575436436,
            "unit": "ns/iter",
            "extra": "iterations: 71664039\ncpu: 1.949361240998432 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.9520363720376295,
            "unit": "ns/iter",
            "extra": "iterations: 71844610\ncpu: 1.9498720920052324 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 101.93446023733772,
            "unit": "ns/iter",
            "extra": "iterations: 1379881\ncpu: 101.52382705465183 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 415.10401042244536,
            "unit": "ns/iter",
            "extra": "iterations: 354323\ncpu: 395.585101729213 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 48.621242460338294,
            "unit": "ns/iter",
            "extra": "iterations: 3138542\ncpu: 44.65130624347227 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 88.78922163992982,
            "unit": "ns/iter",
            "extra": "iterations: 3135695\ncpu: 44.65357759603534 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 61.250796372663146,
            "unit": "ns/iter",
            "extra": "iterations: 2898887\ncpu: 48.28339290217251 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 30.138203077310617,
            "unit": "ns/iter",
            "extra": "iterations: 5698702\ncpu: 24.516302133362995 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1027.1754457650509,
            "unit": "ns/iter",
            "extra": "iterations: 144966\ncpu: 961.5454658333682 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 981.6639092377249,
            "unit": "ns/iter",
            "extra": "iterations: 145532\ncpu: 972.6355715581457 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 520958.66203308105,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 20034.5 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7512216.567993164,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 70034 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12050595.2835083,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 329811 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 397578.52218996646,
            "unit": "ns/iter",
            "extra": "iterations: 6911\ncpu: 20438.894515989006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 5858781.337738037,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 67155.99999999988 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7451670.169830322,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 304702.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.528644502171626,
            "unit": "ns/iter",
            "extra": "iterations: 46661845\ncpu: 2.9992084539306156 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 11.461957363503585,
            "unit": "ns/iter",
            "extra": "iterations: 15615955\ncpu: 8.973725910455046 ns\nthreads: 1"
          }
        ]
      }
    ],
    "OpenTelemetry-cpp exporters Benchmark": [
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a821fdfa5a7ef3850319483df002f42f6d8b691",
          "message": "Continuous benchmark tests as part of the CI (#1174)",
          "timestamp": "2022-01-21T10:12:39-08:00",
          "tree_id": "be73c679916ac58ef57ef857fd51e17edd33b0c8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/2a821fdfa5a7ef3850319483df002f42f6d8b691"
        },
        "date": 1642789435314,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.96105513145793,
            "unit": "ns/iter",
            "extra": "iterations: 4211000\ncpu: 31.935620992638327 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 85.41997873558188,
            "unit": "ns/iter",
            "extra": "iterations: 1590000\ncpu: 85.41339622641512 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 727.9445143306957,
            "unit": "ns/iter",
            "extra": "iterations: 204000\ncpu: 727.8313725490198 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1716770.5279242373,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 367312.23241590225 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a605fd9116723cb33769dafb25a9bb88323a7674",
          "message": "importing gsl::span if std::span is not available (#1167)",
          "timestamp": "2022-01-24T19:14:20-08:00",
          "tree_id": "06217abfa84c48eaac7328bb508b450be04ab671",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/a605fd9116723cb33769dafb25a9bb88323a7674"
        },
        "date": 1643081179157,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 34.817587283307745,
            "unit": "ns/iter",
            "extra": "iterations: 4023000\ncpu: 34.799751429281635 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 96.02210827029694,
            "unit": "ns/iter",
            "extra": "iterations: 1468000\ncpu: 95.49032697547686 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 796.1067286404697,
            "unit": "ns/iter",
            "extra": "iterations: 176000\ncpu: 795.7551136363638 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1950522.3157200427,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 360248.82506527426 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}