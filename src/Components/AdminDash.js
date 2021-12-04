import AdminList from "./AdminTable";

function AdminDash() {
  return (
    <container>
      <div>
        <h1 className="text-center p-4 text-primary">Administration Dashboard</h1>
      </div>
      <div>
        <AdminList />
      </div>
    </container>
  );
}

export default AdminDash;
