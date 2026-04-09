import { useMemo, useState } from "react";
import dateFormatter from "./../../../../../utils/dateFormatter";
import { useDashboardContext } from "../../../../../context/DashboardContext";
import { useFetchData } from "./../../../../../hooks/useFetchData";
import endPoints from "../../../../../constant/endPoints";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "./../../../../../components/breadcrumbs/Breadcrumbs";
import TableToolBar from "./../../../../../components/table_toolbar/TableToolBar";
import Search from "./../../../../../components/table_toolbar/Search";
import Delete from "./../../../../../components/table_toolbar/Delete";
import Table from "../../../../../components/table/Table";
import CreateBackup from "../components/CreateBackup";
import "../style/style.css";
import Button from "../../../../../components/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt, faUndo } from "@fortawesome/free-solid-svg-icons";
import Restore from "../components/Restore";
import Replace from "../components/Replace";

const Backups = () => {
  const [replace, setReplace] = useState(null);
  const [restore, setRestore] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const { page_size } = useDashboardContext();

  const { data, isLoading, error, refetch } = useFetchData({
    endPoints: endPoints.backup,
    page,
    page_size,
    ordering: sort,
    search,
  });

  const { t } = useTranslation();

  const column = useMemo(
    () => [
      {
        name: "filename",
        headerName: "filename",
        sort: true,
      },
      {
        name: "file_path",
        headerName: "file_path",
      },
      {
        name: "type",
        headerName: "type",
      },
      {
        name: "size",
        headerName: "size",
        sort: true,
      },
      {
        name: "created_at",
        headerName: "created_at",
        sort: true,
        getCell: ({ row }) => dateFormatter(row.created_at, "fullDate"),
      },
      {
        name: "actions",
        headerName: "actions",
        getCell: ({ row }) => (
          <div className="center gap-10">
            <Button
              btnStyleType="transparent"
              btnType="delete"
              onClick={() => setReplace(row)}
            >
              <FontAwesomeIcon icon={faUndo} />
              replace
            </Button>
            <Button
              btnStyleType="transparent"
              btnType="save"
              onClick={() => setRestore(row)}
            >
              <FontAwesomeIcon icon={faExchangeAlt} />
              restore
            </Button>
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <>
      <Breadcrumbs />

      <div className="table-container">
        <TableToolBar title={t("pages.backup")}>
          <Search setSearch={setSearch} />
          <Delete
            data={data?.data}
            endPoint={`${endPoints.backup}bulk-hard-delete/`}
            selectedItems={selectedItems}
            setPage={setPage}
            setSelectedItems={setSelectedItems}
          />
          <CreateBackup />
        </TableToolBar>
        <Table
          colmuns={column}
          currentPage={page}
          data={data?.data}
          dataLength={data?.totalCount}
          loading={isLoading}
          selectedItems={selectedItems}
          setPage={setPage}
          setSelectedItems={setSelectedItems}
          setSort={setSort}
          error={error}
          onRefetch={refetch}
          sortBy={sort}
        />
      </div>
      {restore && <Restore restore={restore} setRestore={setRestore} />}
      {replace && <Replace replace={replace} setReplace={setReplace} />}
    </>
  );
};

export default Backups;
