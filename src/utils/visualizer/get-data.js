/**
 * Provides data for the visualizer.
 * 
 * Expected data format of models/experiments returned by the functions getModel
 * and getExperiment:
 * 
 * ```
 * { model Bool: true if this is a model, false if this is an experiment
 * , id String: ID if the model/experiment
 * , name String: name of the model
 * , xAxisName: String
 * , yAxisName: String
 * , datasets:
 *   [ { name String: name of the dataset
 *     , data [][]Number: data[0] is array of x axis values, others are y values of traces
 *     }
 *   ]
 * , legend:
 *   [ { name String: name of a trace
 *     , color String: css color of a trace or null to generate a random color
 *     }
 *   ]
 * , graphsets:
 *   [ { name String: name of a graphset
 *     , datasets []Bool: datasets[n] is true iff n-th trace should be visible in this graphset
 *     }
 *   ]
 * , linkedData:
 *     [ { id String: IDs of a linked (relevant) model/experiment.
 *       , model Bool: true of this is a model
 *       , name String: name of the model/experiment
 *       }
 *     ]|undefined
 * }
 * ```
**/

/**
 * Find all models related to an experiment.
 *
 * Expected output: Promise of array of `{ id: model ID, name: model name }`.
 * 
 * If the function 'getExperiment' returns data that already contains the related
 * models, this function won't have to be implemented.
 */
export async function findModels(experimentId) {
  // TODO actual implementation
  
  return [];
}

/**
 * Find all experiments related to a model.
 *
 * Expected output: Promise of array of
 * `{ id: experiment ID, name: experiment name}`.
 * 
 * If the function 'getModel' returns data that already contains the related
 * experiments, this function won't have to be implemented.
 */
export async function findExperiments(modelId) {
  // TODO actual implementation
  
  return [];
}

/**
 * Given a 'modelId', download and return all data from model with id 'modelId'.
 * 
 * Currently, this function returns mockup data defined at the end of this file.
 */
export async function getModel(modelId) {
  // TODO actual implementation
  
  await new Promise(f => setTimeout(f, 400 + Math.random() * 400));
  
  return data[modelId];
}

/**
 * Given an 'experimentId', download and return all data from experiment with id
 * 'experimentId'.
 * 
 * Currently, this function returns mockup data defined at the end of this file.
 */
export async function getExperiment(experimentId) {
  // TODO actual implementation
  
  await new Promise(f => setTimeout(f, 400 + Math.random() * 400));
  
  return data[experimentId];
}

/**
 * Calls server API that causes download of model/experiment data in 'format'
 * ("csv"|"json").
 * 
 * Params:
 * format String: expected file extension of the downloaded data (without the dot).
 * dataArr []{ model: Bool, id: String }: array of model/experiment IDs whose
 *   data to download.
 */
export async function doExport(format, dataArr) {
  // TODO implementation
  
  console.log("Function doExport called with arguments: ", format, dataArr);
}

////////////////////////////////////////////////////////////////////////////////
//
// Below are some examples of the data functions getModel and getExperiment
// are expected to return. They can be deleted after the functions are
// implemented.
//
////////////////////////////////////////////////////////////////////////////////

const data =
    { randomBacteria:
      { model: true
      , id: "randomBacteria"
      , name: "Random bacteria found in forgotten petri dishes"
      , xAxisName: "Time"
      , yAxisName: "Bacteria [million/mm2]"
      , datasets:
        [ { name: "The bigger petri dish"
          , data: 
            [ [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
            , [ 10, 11, 13, 17, 19, 18, 20, 16, 9, 9, 8 ]
            , [ 5, 4, 4, 8, 10, 8, 5, 4, 6, 9, 11 ]
            ]
          }
        , { name: "The smaller one"
          , data:
            [ [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
            , [ 5, 5, 7, 9, 11, 9, 8, 7, 3, 4, 3 ]
            , [ 5, 6, 6, 9, 12, 9, 5, 6, 6, 11, 12 ]
            ]
          }
        ]
      , legend:
        [ { name: "Grey colony"
          , color: "blue"
          }
        , { name: "Green colony"
          , color: "green"
          }
        ]
      , graphsets:
        [ { name: "All", datasets: [ true, true ] }
        , { name: "Green colony only", datasets: [ false, true ] }
        ]
      }
    , anotherModel:
      { model: true
      , id: "anotherModel"
      , name: "Another model"
      , xAxisName: "Time"
      , yAxisName: "Woooooo"
      , datasets:
        [ { name: "High CO2"
          , data: 
            [ [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
            , [ 4, 3, 3, 4, 5, 7, 10, 9, 10, 10, 9, 9, 10 ]
            , [ 5, 7, 13, 15, 15, 14, 12, 9, 7, 6, 4, 3, 2 ]
            ]
          }
        , { name: "Low CO2"
          , data:
            [ [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
            , [ 4, 3, 2, 3, 3, 5, 5, 6, 5, 4, 4, 5, 3 ]
            , [ 5, 5, 7, 8, 9, 8, 9, 8, 7, 8, 6, 6, 5 ]
            ]
          }
        ]
      , legend:
        [ { name: "Trace Mike"
          , color: "yellow"
          }
        , { name: "Trace Laura"
          , color: "purple"
          }
        ]
      , graphsets:
        [ { name: "All", datasets: [ true, true ] }
        , { name: "None", datasets: [ false, false ] }
        ]
      , linkedData:
        [ { id: "randomBacteria"
          , model: true
          , name: "Random bacteria found in forgotten petri dishes"
          }
        , { id: "actualData"
          , model: false
          , name: "Some actual data"
          }
        ]
      }
    , ptsALot:
      { model: false
      , id: "ptsALot"
      , name: "Lots of points"
      , xAxisName: "Time"
      , yAxisName: "Bacteria [million/mm2]"
      , datasets:
        [ { name: "The bigger petri dish"
          , data: 
            [ []
            , []
            , []
            , []
            , []
            , []
            , []
            , []
            , []
            , []
            , []
            ]
          }
        ]
      , legend:
        [ { name: "0", color: "red" }
        , { name: "1", color: "green" }
        , { name: "2", color: "blue" }
        , { name: "3", color: "cyan" }
        , { name: "4", color: "purple" }
        , { name: "5", color: "yellow" }
        , { name: "6", color: "brown" }
        , { name: "7", color: "turquoise" }
        , { name: "8", color: "salmon" }
        , { name: "9", color: "orange" }
        ]
      , graphsets:
        [ { name: "All", datasets: [ true, true, true, true, true, true, true, true, true, true ] }
        ]
      }
    , actualData: {"model":false,"id":"actualData","name":"Some actual data from an experiment or a simulation","xAxisName":"Time","yAxisName":"Species [molecules/cell]","datasets":[{"name":"The bigger petri dish","data":[[0,2.0339,4.0678,6.10169,8.13559,10.1695,12.2034,14.2373,16.2712,18.3051,20.339,22.3729,24.4068,26.4407,28.4746,30.5085,32.5424,34.5763,36.6102,38.6441,40.678,42.7119,44.7458,46.7797,48.8136,50.8475,52.8814,54.9153,56.9492,58.9831,61.0169,63.0508,65.0847,67.1186,69.1525,71.1864,73.2203,75.2542,77.2881,79.322,81.3559,83.3898,85.4237,87.4576,89.4915,91.5254,93.5593,95.5932,97.6271,99.661,101.695,103.729,105.763,107.797,109.831,111.864,113.898,115.932,117.966,120],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14,1.019e-14],[0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615],[2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16,2.039e-16],[0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162],[1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615,1.615],[1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10,1.019e-10],[0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162,0.162],[0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268,0.268],[7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17,7.393e-17],[0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615,0.0001615],[0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756,0.0008756],[0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788,0.08788],[1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8],[0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079,0.00001079],[0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079,0.000001079],[1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8,1.079e-8],[10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000,10170000],[64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000,64580000],[0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539],[0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539,0.539],[1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079,1.079],[0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89,0.89],[2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423,2.423],[0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346,0.346],[0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133,0.133],[0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178,0.178],[0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008,0.008],[0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49],[1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3],[0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2],[0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239,0.008239],[170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1,170.1],[3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12,3.657e-12],[1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12,1e-12],[602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602],[602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602,602],[0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602],[0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602],[0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602,0.602],[66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75,66.75],[5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000],[139.22,24.7726,8.45205,441.122,2053.97,3152.25,3719.04,3876.65,3739.2,3395.46,2914.19,2350.58,1752.05,1164.27,639.152,245.466,54.1264,23.0403,261.26,772.958,1125.05,1248.93,1180.8,979.877,704.793,415.457,177.87,50.4474,16.7132,14.9349,112.01,505.177,844.991,992.439,957.585,794.279,560.401,316.744,128.046,38.1295,16.3685,24.3324,237.157,665.16,952.922,1033.3,944.142,743.324,490.596,249.747,86.5061,25.1371,14.4446,66.0872,486.24,915.928,1132.23,1135.36,982.725,735.238],[779.158,495.378,172.521,36.0807,364.273,728.719,1000.35,1185.64,1303.07,1367.05,1387.71,1370.43,1315.67,1218.41,1066.65,840.37,527.335,175.862,156.307,489.145,821.938,1067.58,1223.22,1301.12,1307.03,1240.1,1093.64,866.528,582.694,274.347,115.546,367.715,693.399,946.67,1105.33,1182.69,1184.85,1111.26,957.511,729.02,452.243,165.712,154.928,459.637,765.881,979.562,1104.64,1152.17,1126.14,1023.83,841.225,590.952,303.563,79.9601,263.266,591.623,861.2,1034.1,1125.4,1143.75],[1229.56,1504.01,1810.4,1964.7,1676.31,1294.41,1018.54,859.184,797.258,815.583,899.944,1039.35,1225.81,1453.91,1720.46,2023.87,2361.59,2711.52,2740.23,2383.26,1991.19,1701.5,1530.9,1461.9,1479.46,1571.43,1728.3,1941.48,2199.66,2489.08,2647.04,2384.45,2003.66,1697.47,1512.78,1432.33,1440.76,1525.52,1676.46,1883.79,2135.35,2407.98,2425.69,2097.33,1733.91,1479.45,1339.55,1297.23,1338.07,1450.55,1625.2,1851.79,2117.54,2336.66,2161.44,1792.3,1472.32,1274.51,1182.84,1181.22],[932.446,623.651,613.318,1399.78,1640.02,1729.24,1764.35,1769.16,1753.37,1721.1,1673.57,1609.83,1526.53,1416.52,1265.33,1046.55,776.601,782.859,1214.65,1383.08,1448.42,1461.93,1439.8,1387.33,1302.37,1175.25,988.077,751.24,617.37,703.753,1073.62,1299.69,1384.71,1407.98,1389.92,1337.89,1250.19,1117.18,925.924,716.272,642.507,805.673,1188.98,1347.41,1407.23,1414.23,1383.85,1319.82,1217.46,1063.7,849.404,661.029,666.307,998.612,1305.14,1409.07,1443,1433.53,1390.61,1314.48],[110.829,115.157,118.843,119.106,114.872,109.15,104.184,100.846,99.5051,100.13,102.288,105.411,109.037,112.873,116.758,120.59,124.178,127.113,126.691,123.245,119.23,115.923,113.856,113.117,113.633,115.189,117.486,120.154,122.825,125.355,126.22,123.493,119.575,116.072,113.801,112.883,113.267,114.739,116.977,119.573,122.194,124.565,124.124,120.646,116.513,113.273,111.405,110.991,111.906,113.861,116.466,119.27,122.003,123.687,121.398,117.188,113.073,110.244,108.948,109.188],[3251.37,3259.37,3206.26,2177.38,1832.92,3117.83,3150.04,3176.27,3197.89,3215.85,3230.83,3243.33,3253.78,3262.49,3269.73,3275.67,3279.95,2996.08,1669.38,1495.22,3111.55,3143.65,3170.39,3192.7,3211.33,3226.89,3239.86,3250.62,3259.24,3208.04,2212.63,1583.46,2715.29,3137.79,3165.37,3188.4,3207.62,3223.67,3237.05,3248.1,3256.53,3006.6,1908.86,1842.59,3118.07,3148.87,3174.53,3195.95,3213.84,3228.76,3241.18,3251.34,3251.82,2539.09,1680.63,2442.74,3133.03,3161.25,3184.79,3204.45],[0.173,0.449817,58.2707,993.703,1271.68,0.209611,0.104783,0.0709351,0.0585532,0.0565652,0.0615294,0.0727414,0.0914208,0.121823,0.176753,0.307797,1.01451,271.527,1466.71,1604.4,0.320405,0.178213,0.13132,0.114952,0.115508,0.131794,0.173078,0.27784,0.680928,57.1185,964.354,1522.3,391.265,0.208432,0.146775,0.12593,0.126025,0.145572,0.19805,0.345031,1.18555,243.773,1232.53,1260.21,0.290446,0.166843,0.126726,0.11546,0.122568,0.151361,0.226097,0.475964,8.30559,667.934,1432.64,661.514,0.19674,0.129831,0.106968,0.104282],[1130,1074.6,1307.44,5045.59,10781.7,10817,8966.66,6894.93,5128.5,3766,2767.19,2060.2,1577.8,1267.7,1095.13,1046.97,1153.56,1630.98,3765.26,5553.32,5544.96,4768.49,3845.1,3021.22,2366.79,1883.92,1556.45,1374.46,1356.81,1617.77,2841.9,4733.73,5117.35,4579.75,3777.64,3011.81,2384.72,1915.95,1599.69,1435.39,1460.23,1879.73,3672.87,5146.89,5096.31,4376.65,3533.31,2785.57,2196.89,1771.6,1501.43,1394.86,1530.15,2451.8,4837.8,5583.85,5069.08,4169.05,3286.45,2557.13],[166.559,174.643,179.223,87.3491,22.3096,33.6505,63.4514,88.5222,109.532,127.112,141.811,154.094,164.351,172.91,180.043,185.971,190.824,177.57,48.6391,14.1022,26.2324,57.0993,83.116,104.934,123.198,138.471,151.232,161.878,170.714,175.816,89.0928,20.2762,21.5443,51.9479,78.7648,101.266,120.106,135.864,149.029,160.008,169.084,161.784,54.9442,18.1552,33.448,63.1637,88.173,109.135,126.678,141.344,153.591,163.789,171.925,119.596,28.3518,20.1919,48.222,75.6127,98.606,117.862],[9.998,10.2596,10.4133,7.5965,3.90646,4.30183,6.10114,7.25923,8.09741,8.73527,9.23403,9.63064,9.94959,10.2081,10.4186,10.5906,10.7297,10.4425,5.84902,3.05603,3.7108,5.75754,7.02051,7.9179,8.59485,9.12144,9.53871,9.87322,10.1427,10.3132,7.64319,3.76271,3.4622,5.46876,6.82635,7.7744,8.48408,9.03374,9.46805,9.81544,10.094,9.9574,6.12205,3.43789,4.26222,6.07724,7.23877,8.07874,8.71767,9.21707,9.61393,9.9323,10.1818,8.71615,4.46485,3.4319,5.25022,6.68277,7.66904,8.40295],[2.856,2.91025,4.08611,25.7457,24.4656,19.5864,15.3803,12.0146,9.38421,7.35807,5.81918,4.67232,3.84431,3.28416,2.96776,2.92013,3.31959,5.29971,12.3362,12.3704,10.5505,8.68804,7.08981,5.79768,4.79399,4.05246,3.55974,3.34022,3.51732,4.62976,9.56022,11.5021,10.1736,8.49923,6.99531,5.75836,4.79177,4.08153,3.62645,3.47273,3.8127,5.67953,11.3794,11.4188,9.75086,8.03993,6.57571,5.39955,4.49972,3.86103,3.49348,3.48355,4.21281,8.59845,12.6934,11.2866,9.34649,7.60341,6.17283,5.05115],[2.865,3.21649,5.37008,41.9182,37.0569,27.3188,19.7429,14.2098,10.2543,7.46882,5.54139,4.24501,3.42086,2.9665,2.83534,3.06778,3.95944,7.40013,18.9486,18.0635,14.416,11.0949,8.4899,6.55614,5.18071,4.26393,3.74786,3.65006,4.15853,6.15253,14.3804,16.9391,14.1035,11.0405,8.53409,6.6413,5.28618,4.38861,3.90897,3.89866,4.65709,7.88815,17.2112,16.4906,13.1991,10.1847,7.82376,6.08275,4.86711,4.10103,3.76794,3.98865,5.37805,12.7966,18.9996,15.8715,12.2674,9.32434,7.10911,5.51726],[51.022,42.7483,38.0351,131.334,198.394,187.009,156.411,130.821,109.419,91.5209,76.5541,64.0402,53.5796,44.8391,37.5424,31.4673,26.4838,39.8284,171.062,207.068,194.682,162.833,136.198,113.924,95.299,79.7271,66.7133,55.8499,46.8258,41.588,129.625,200.431,199.377,168.012,140.531,117.549,98.3318,82.2654,68.8399,57.6383,48.3718,55.6947,164.457,202.65,187.005,156.414,130.83,109.436,91.5465,76.5922,64.1003,53.6933,45.3813,98.4115,191.826,200.574,171.686,143.601,120.114,100.473],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0.893768,0.844131,0.837681,0.921583,0.934542,0.940627,0.944243,0.946072,0.946297,0.945021,0.942401,0.938544,0.933334,0.926197,0.915521,0.896678,0.862143,0.860311,0.905549,0.918182,0.923944,0.926531,0.926717,0.924611,0.919751,0.910737,0.893732,0.862113,0.834064,0.848807,0.894802,0.913228,0.92051,0.92384,0.92432,0.922191,0.916927,0.906862,0.887835,0.856944,0.840207,0.866094,0.905473,0.917819,0.923535,0.925845,0.925494,0.922428,0.91582,0.903308,0.879419,0.847148,0.845235,0.889792,0.9149,0.923218,0.927335,0.928588,0.927347,0.923305],[0.106232,0.155869,0.162319,0.0784171,0.0654582,0.0593727,0.0557573,0.0539281,0.053703,0.0549793,0.057599,0.0614555,0.0666664,0.0738029,0.0844794,0.103322,0.137857,0.139689,0.0944511,0.0818183,0.0760563,0.073469,0.0732829,0.0753893,0.0802492,0.0892633,0.106268,0.137887,0.165936,0.151193,0.105198,0.0867721,0.0794898,0.0761603,0.0756797,0.0778088,0.0830734,0.0931382,0.112165,0.143056,0.159793,0.133906,0.0945272,0.0821807,0.0764652,0.0741554,0.0745057,0.0775721,0.0841797,0.096692,0.120581,0.152852,0.154765,0.110208,0.0850996,0.0767816,0.0726655,0.071412,0.0726529,0.0766948]]}],"legend":[{"name":"cytosol","color":"rgb(0, 0, 0)"},{"name":"k4","color":"rgb(12.966101694915254, 38.898305084745765, 116.69491525423729)"},{"name":"k3","color":"rgb(25.93220338983051, 77.79661016949153, 233.38983050847457)"},{"name":"k2","color":"rgb(38.898305084745765, 116.69491525423729, 95.08474576271186)"},{"name":"k5","color":"rgb(51.86440677966102, 155.59322033898306, 211.77966101694915)"},{"name":"k1","color":"rgb(64.83050847457628, 194.4915254237288, 73.47457627118645)"},{"name":"k6","color":"rgb(77.79661016949153, 233.38983050847457, 190.16949152542372)"},{"name":"k7","color":"rgb(90.76271186440678, 17.288135593220346, 51.86440677966104)"},{"name":"k8","color":"rgb(103.72881355932203, 56.18644067796611, 168.55932203389833)"},{"name":"k9","color":"rgb(116.69491525423729, 95.08474576271186, 30.254237288135624)"},{"name":"k10","color":"rgb(129.66101694915255, 133.98305084745763, 146.9491525423729)"},{"name":"k11","color":"rgb(142.6271186440678, 172.88135593220338, 8.644067796610209)"},{"name":"k12","color":"rgb(155.59322033898306, 211.77966101694915, 125.33898305084749)"},{"name":"k21","color":"rgb(168.5593220338983, 250.67796610169492, 242.0338983050848)"},{"name":"k22","color":"rgb(181.52542372881356, 34.57627118644069, 103.72881355932208)"},{"name":"k23","color":"rgb(194.4915254237288, 73.47457627118645, 220.4237288135594)"},{"name":"k24","color":"rgb(207.45762711864407, 112.37288135593222, 82.11864406779667)"},{"name":"ka1","color":"rgb(220.42372881355934, 151.27118644067798, 198.81355932203397)"},{"name":"ka2","color":"rgb(233.38983050847457, 190.16949152542372, 60.50847457627125)"},{"name":"kcat1","color":"rgb(246.35593220338984, 229.0677966101695, 177.20338983050854)"},{"name":"kcat2","color":"rgb(4.32203389830507, 12.966101694915277, 38.89830508474583)"},{"name":"kcat3","color":"rgb(17.288135593220325, 51.86440677966104, 155.59322033898312)"},{"name":"kcat4","color":"rgb(30.254237288135577, 90.76271186440681, 17.288135593220417)"},{"name":"kcat_b1","color":"rgb(43.22033898305083, 129.66101694915258, 133.9830508474577)"},{"name":"kcat_b2","color":"rgb(56.18644067796609, 168.55932203389833, 250.67796610169498)"},{"name":"kmdeg1","color":"rgb(69.15254237288134, 207.4576271186441, 112.3728813559323)"},{"name":"kmdeg2","color":"rgb(82.1186440677966, 246.35593220338987, 229.06779661016958)"},{"name":"kpdeg1","color":"rgb(95.08474576271185, 30.254237288135624, 90.76271186440687)"},{"name":"kpdeg2","color":"rgb(108.0508474576271, 69.15254237288138, 207.45762711864415)"},{"name":"kpdeg3","color":"rgb(121.01694915254235, 108.05084745762714, 69.15254237288144)"},{"name":"kpdeg4","color":"rgb(133.9830508474576, 146.9491525423729, 185.84745762711873)"},{"name":"ktl1","color":"rgb(146.94915254237287, 185.84745762711867, 47.54237288135604)"},{"name":"ktl2","color":"rgb(159.91525423728814, 224.74576271186444, 164.23728813559333)"},{"name":"kbts1","color":"rgb(172.88135593220338, 8.644067796610209, 25.932203389830622)"},{"name":"kbts2","color":"rgb(185.84745762711864, 47.54237288135597, 142.6271186440679)"},{"name":"Km1","color":"rgb(198.8135593220339, 86.44067796610173, 4.322033898305207)"},{"name":"Km2","color":"rgb(211.77966101694915, 125.33898305084749, 121.0169491525425)"},{"name":"Km3","color":"rgb(224.74576271186442, 164.23728813559325, 237.7118644067798)"},{"name":"Km4","color":"rgb(237.71186440677965, 203.13559322033902, 99.40677966101707)"},{"name":"Km_b1","color":"rgb(250.67796610169492, 242.0338983050848, 216.10169491525437)"},{"name":"Km_b2","color":"rgb(8.64406779661014, 25.932203389830555, 77.79661016949166)"},{"name":"RNAP","color":"rgb(21.610169491525394, 64.83050847457632, 194.49152542372894)"},{"name":"KaiC6","color":"rgb(34.57627118644065, 103.72881355932208, 56.186440677966246)"},{"name":"PPKaiC6","color":"rgb(47.5423728813559, 142.62711864406785, 172.88135593220355)"},{"name":"CPKaiC6","color":"rgb(60.508474576271155, 181.52542372881362, 34.576271186440835)"},{"name":"KaiC","color":"rgb(73.47457627118641, 220.4237288135594, 151.27118644067812)"},{"name":"PKaiC","color":"rgb(86.44067796610166, 4.322033898305139, 12.966101694915416)"},{"name":"KaiB4i","color":"rgb(99.40677966101691, 43.2203389830509, 129.6610169491527)"},{"name":"KaiB4","color":"rgb(112.37288135593218, 82.11864406779667, 246.35593220338998)"},{"name":"KaiB","color":"rgb(125.33898305084743, 121.01694915254244, 108.05084745762728)"},{"name":"KaiA2","color":"rgb(138.30508474576268, 159.9152542372882, 224.7457627118646)"},{"name":"KaiA","color":"rgb(151.27118644067792, 198.81355932203397, 86.44067796610187)"},{"name":"kaiA_mRNA","color":"rgb(164.2372881355932, 237.7118644067797, 203.13559322033916)"},{"name":"kaiBC_mRNA","color":"rgb(177.20338983050846, 21.610169491525486, 64.83050847457646)"},{"name":"KaiA2B4","color":"rgb(190.1694915254237, 60.50847457627125, 181.52542372881373)"},{"name":"L_","color":"rgb(203.13559322033896, 99.40677966101701, 43.22033898305104)"},{"name":"KaiC_rel","color":"rgb(216.1016949152542, 138.30508474576277, 159.9152542372883)"},{"name":"PKaiC_rel","color":"rgb(229.06779661016947, 177.20338983050854, 21.610169491525625)"}],"graphsets":[{"name":"All","datasets":[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]}],"legendItems":null,"datasetsVisibility":null}
    };

data.ptsALot.datasets[0].data.forEach((trace, i) => {
  for (let f = 0; f < 1000; f++) {
    if (i) {
      trace[trace.length] = Math.max((trace[trace.length-1] || 0) -1 + Math.random() * 2, 0);
    } else {
      trace.push(f);
    }
  }
});
