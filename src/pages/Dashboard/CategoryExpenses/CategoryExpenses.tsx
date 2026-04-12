import ProgressBar from '@/Components/common/ProgressBar/ProgressBar'
import classes from './categoryExpenses.module.css'
import { getCategoryWiseExpenses } from '@/services/transactionService';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import AppConstants from '@/utils/AppConstants';
import Table from './Table/Table';
import BudgetCardSkeleton from '@/Components/common/Skeleton/BudgetCardSkeleton/BudgetCardSkeleton';
import TransactionListSkeleton from '@/Components/common/Skeleton/TransactionListSkeleton/TransactionListSkeleton';

const CategoryExpenses = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["category-expenses"],
        queryFn: async () => {
            const data = await getCategoryWiseExpenses({
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear(),
            });

            if (error) {
                toast.error(data?.error);
            }

            return data;
        },
        staleTime: 1000 * 60 * 5,
    });
    return (
        <>
            <section className={classes.exp_expenses_sec}>
                <div className={classes.expenses_container}>
                    <div>
                        <h2 className={classes.title}>Category-wise Expenses</h2>
                        {isLoading ? <BudgetCardSkeleton /> : <div className={classes.expenses_list}>
                            {
                                data?.categories?.map((item: any) => (
                                    <div className={classes.expense_card} key={`category_${item.category_id}`}>
                                        <img src={
                                            AppConstants?.category?.[
                                            item.category_icon as keyof typeof AppConstants.category
                                            ]
                                        } alt="category1" />
                                        <strong>{item?.category_name}</strong>
                                        <span>{item?.spent_amount?.toLocaleString("en-IN")} of {item?.limit_amount?.toLocaleString("en-IN")}</span>
                                        <ProgressBar filled={item?.spent_percentage} />
                                    </div>
                                ))
                            }
                        </div>}
                    </div>
                    <div>
                        <h2 className={classes?.title}>Latest Transactions</h2>
                        { isLoading ? <TransactionListSkeleton /> : <Table data={data} />}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryExpenses