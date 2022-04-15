import ProgressRow from 'components/ProgressRow';
import grammarHash from 'pageConfig/grammar';
import { Grammar } from 'pageConfig/grammar/types';
import { useEffect, useState } from 'react';
import { TaskCategoryProps } from './types';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid';

const TaskCategory = (props: TaskCategoryProps) => {
  const { title, subtitle, tasks, checkData, toggleCheckbox } = props;
  const [grammarData, setGrammarData] = useState<(Grammar | undefined)[]>([]);
  const [grammarComplete, setGrammarComplete] = useState<number>(0);
  const [dirty, setDirty] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const totalTasks = grammarData?.length;

  useEffect(() => {
    const data: (Grammar | undefined)[] = tasks.map((task) =>
      grammarHash.get(task)
    );
    setGrammarData(data);
  }, [tasks]);

  useEffect(() => {
    setGrammarComplete(
      grammarData.reduce(
        (prev, cur) => prev + (checkData.get(cur?.id || '') ? 1 : 0),
        0
      )
    );
  }, [grammarData, dirty]);

  useEffect(() => {
    setDirty(false);
  }, [dirty]);

  useEffect(() => {
    if (totalTasks !== 0 && grammarComplete === totalTasks) setCollapsed(true);
  }, [grammarComplete]);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const percentComplete = (grammarComplete / totalTasks) * 100;

  return (
    <>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingOne5">
          <button
            className="accordion-button text-xl relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne5"
            aria-expanded="true"
            aria-controls="collapseOne5"
            onClick={handleCollapse}
          >
            {collapsed ? (
              <ChevronRightIcon className="h-5 w-5 mr-2 text-black-500" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 mr-2 text-black-500" />
            )}
            {title}
          </button>
          <p>
            {subtitle && (
              <span className="ml-5 text-xs text-grey-600">{subtitle}</span>
            )}
          </p>
        </h2>

        <div className="w-10/12 ml-4 bg-gray-200 rounded-full">
          <div
            className="mb-4 bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${percentComplete}%` }}
          >
            {`${grammarComplete}`}/{`${totalTasks}`}
          </div>
        </div>
        {!collapsed && (
          <>
            <div
              id="collapseOne5"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne5"
            >
              <div className="accordion-body py-4 px-5 flex-wrap">
                <table className="table-auto flex-wrap">
                  <thead>
                    <tr>
                      <th>Done</th>
                      <th>Grammar</th>
                      <th>Helpful Links</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grammarData?.map((task: Grammar | undefined) => {
                      return (
                        <>
                          {task && (
                            <ProgressRow
                              id={task.id}
                              title={task.title}
                              link={task.link}
                              longDesc={task.longDesc}
                              setDirty={setDirty}
                              checkedData={checkData}
                              toggleCheckbox={toggleCheckbox}
                              key={`task-${task.id}`}
                            />
                          )}
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TaskCategory;
